import Delegate from './Delegate'

class HealthMessage extends Delegate {
  handle (parameters) {
    const data = parameters.healthData[0]
    const agent = this.core.agent

    agent.health = data.health
  }
}

export default HealthMessage
