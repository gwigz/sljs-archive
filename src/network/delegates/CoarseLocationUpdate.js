import Delegate from './Delegate'

import { AgentUpdate } from '../packets'

class CoarseLocationUpdate extends Delegate {
  async handle (parameters) {
    const agent = this.circuit.agent
    const index = parameters.index[0]

    if (index.you !== -1) {
      // TODO: This is not correct, self-agent should not use these location
      // details as they are only accurate to the meter, and less so by Z axis.
      agent.position = parameters.location[index.you]
      agent.position.z *= 4

      // Eventually we'll move where this is done...
      this.circuit.send(new AgentUpdate({
        agentData: {
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
          controlFlags: agent.flags,
          // for auto pilot: 0x02
          flags: 0
        }
      }))
    }
  }
}

export default CoarseLocationUpdate
