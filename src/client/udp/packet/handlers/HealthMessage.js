const AbstractHandler = require('./AbstractHandler')

class HealthMessage extends AbstractHandler {
  handle(parameters) {
    const data = parameters.healthData
    const agent = this.manager.client.agent

    // TODO: Figure out a good way to have listeners, or just emit this.
    agent.health = data.health
  }
}

module.exports = HealthMessage
