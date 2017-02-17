import Delegate from './Delegate'

class HealthMessage extends Delegate {
  async handle (parameters) {
    const data = parameters.healthData[0]
    const agent = this.circuit.agent

    agent.health = data.health
  }
}

export default HealthMessage
