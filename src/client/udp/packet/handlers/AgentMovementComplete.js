const AbstractHandler = require('./AbstractHandler')
const PKID = require('../../../../utilities/Packets')

class AgentMovementComplete extends AbstractHandler {
  handle(parameters) {
    const data = parameters.data
    const sim = parameters.simData
    const agent = this.manager.client.agent
    const simulator = this.manager.client.simulator

    // TODO: Figure out where to put regionHandle, if we need it for anything.
    simulator.channel = sim.channelVersion

    // TODO: Listen/callback of sorts for position updates.
    agent.position = data.position

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
    this.manager.send(PKID.AgentThrottle, {
      agentData: {
        agent: agent.id,
        session: agent.session,
        circuitCode: agent.circuit
      },
      throttle: {
        genCounter: 0,
        throttles: throttles
      }
    })

    // This sends the users field of vision value, which in this case we're
    // just saying "hey, give me everything, even stuff behind me".
    this.manager.send(PKID.AgentFOV, {
      agentData: {
        agent: agent.id,
        session: agent.session,
        circuitCode: agent.circuit
      },
      fovBlock: {
        genCounter: 0,
        // client.fov?
        verticalAngle: (Math.PI * 2) - 0.05
      }
    })

    // This sends the height and width of what would usually calculated via. 3D
    // display/window size.
    this.manager.send(PKID.AgentHeightWidth, {
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
    })
  }
}

module.exports = AgentMovementComplete
