const AbstractHandler = require('./AbstractHandler')

class CoarseLocationUpdate extends AbstractHandler {
  handle(parameters) {
    const agent = this.manager.client.agent
    const index = parameters.index[0];

    if (index.you !== -1) {
      agent.position = parameters.location[index.you];
    }
  }
}

module.exports = CoarseLocationUpdate
