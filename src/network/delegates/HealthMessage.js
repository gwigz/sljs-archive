import Delegate from './Delegate'

class HealthMessage extends Delegate {
  async handle (packet) {
    const data = packet.data.healthData[0]
    const agent = this.client.agent

    agent.health = data.health
  }
}

export default HealthMessage
