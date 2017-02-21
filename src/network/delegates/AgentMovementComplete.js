import Delegate from './Delegate'

import {
  AgentFOV,
  AgentHeightWidth,
  AgentThrottle,
  AgentUpdate,
  SetAlwaysRun
} from '../packets'

class AgentMovementComplete extends Delegate {
  async handle (packet) {
    const data = packet.data.data[0]
    const agent = this.client.agent
    // const sim = packet.data.simData[0]
    // const simulator = this.client.simulator

    agent.position = data.position
    agent.rotation = data.lookAt

    // simulator.channel = sim.channelVersion

    // TODO: Setup an actual objects for region handle (so we can have sugar for
    // global to local transformations).
    agent.handle = {
      x: data.regionHandle.shiftRight(32).toNumber(),
      y: data.regionHandle.and(0xffffffff).toNumber(),
      z: 0.0
    }

    // client.throttle/bandwidth?
    const throttle = 500 * 1024

    const resend = throttle * 0.1
    const land = throttle * 0.1
    const wind = throttle * 0.02
    const cloud = throttle * 0.02
    const task = throttle * 0.31
    const texture = throttle * 0.31
    const asset = throttle * 0.14

    const throttles = new Buffer(7 * 4)

    // May decide to just pass an array of values, keep buffer stuff out of
    // these sorts of classes. Depends on how Variable1 and Variable2 types
    // are defined.
    throttles.writeFloatLE(resend, 0)
    throttles.writeFloatLE(land, 4)
    throttles.writeFloatLE(wind, 8)
    throttles.writeFloatLE(cloud, 12)
    throttles.writeFloatLE(task, 16)
    throttles.writeFloatLE(texture, 20)
    throttles.writeFloatLE(asset, 24)

    // Pass our throttle data, generated above. This controls the rate of
    // various packets that we can safely handle without hitting the users
    // specified bandwidth limit.
    this.circuit.send(new AgentThrottle({
      throttle: {
        genCounter: 0,
        throttles: throttles
      }
    }))

    // This sends the users field of vision value, which in this case we're
    // just saying "hey, give me everything, even stuff behind me".
    this.circuit.send(new AgentFOV({
      fovBlock: {
        genCounter: 0,
        // client.fov or camera.fov?
        verticalAngle: (Math.PI * 2) - 0.05
      }
    }))

    // This sends the height and width of what would usually calculated via. 3D
    // display/window size.
    this.circuit.send(new AgentHeightWidth({
      heightWidthBlock: {
        genCounter: 0,
        height: 360,
        width: 640
      }
    }))

    // Toggle for always run, probably more likely to be used; but we'll set
    // that up once we have a "agent control manager" or something of the sorts.
    this.circuit.send(new SetAlwaysRun({
      agentData: {
        alwaysRun: false
      }
    }))

    // TODO: Add toggle to enable/disable these packets, as they allow object
    // data to start being recieved, which we may or may not want.
    this.circuit.send(new AgentUpdate({
      agentData: {
        bodyRotation: agent.rotation,
        headRotation: [0.0, 0.0, 0.0, 0.0],
        state: agent.state,
        cameraCenter: agent.position,
        cameraAtAxis: [0.0, 0.0, 0.0],
        cameraLeftAxis: [0.0, 0.0, 0.0],
        cameraUpAxis: [0.0, 0.0, 0.0],
        // client or camera.distance or something?
        far: 20,
        controlFlags: 65536,
        // for auto pilot: 0x02
        flags: 0
      }
    }))
  }
}

export default AgentMovementComplete
