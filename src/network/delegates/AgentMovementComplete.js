import Delegate from './Delegate'

import {
  AgentFOV,
  AgentHeightWidth,
  AgentThrottle,
  AgentUpdate,
  SetAlwaysRun
} from '../packets'

class AgentMovementComplete extends Delegate {
  handle (parameters) {
    const data = parameters.data[0]
    const sim = parameters.simData[0]
    const agent = this.core.client.agent
    const simulator = this.core.client.simulator

    // TODO: Figure out where to put regionHandle, if we need it for anything.
    simulator.channel = sim.channelVersion

    // TODO: Listen/callback of sorts for position updates.
    agent.position = data.position
    agent.rotation = data.lookAt

    // TODO: Setup actual objects for these.
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
    this.core.send(new AgentThrottle({
      agentData: {
        agent: agent.id,
        session: agent.session,
        circuitCode: agent.circuit
      },
      throttle: {
        genCounter: 0,
        throttles: throttles
      }
    }))

    // This sends the users field of vision value, which in this case we're
    // just saying "hey, give me everything, even stuff behind me".
    this.core.send(new AgentFOV({
      agentData: {
        agent: agent.id,
        session: agent.session,
        circuitCode: agent.circuit
      },
      fovBlock: {
        genCounter: 0,
        // client.fov or camera.fov?
        verticalAngle: (Math.PI * 2) - 0.05
      }
    }))

    // This sends the height and width of what would usually calculated via. 3D
    // display/window size.
    this.core.send(new AgentHeightWidth({
      agentData: {
        agent: agent.id,
        session: agent.session,
        circuitCode: agent.circuit
      },
      heightWidthBlock: {
        genCounter: 0,
        height: 360,
        width: 640
      }
    }))

    // Toggle for always run, probably more likely to be used; but we'll set
    // that up once we have a "agent control manager" or something of the sorts.
    this.core.send(new SetAlwaysRun({
      agentData: {
        agent: agent.id,
        session: agent.session,
        alwaysRun: false
      }
    }))

    // TODO: Add toggle to enable/disable these packets, as they allow object
    // data to start being recieved, which we may or may not want.
    this.core.send(new AgentUpdate({
      agentData: {
        agent: agent.id,
        session: agent.session,
        bodyRotation: agent.rotation,
        headRotation: [0.0, 0.0, 0.0, 0.0],
        state: agent.state,
        // TODO: Setup camera structure or something...
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
