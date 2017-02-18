import Delegate from './Delegate'

class HealthMessage extends Delegate {
  async handle (packet) {
    const data = packet.data.healthData[0]
    const agent = this.circuit.agent

    agent.health = data.health
  }
}

export default HealthMessage
