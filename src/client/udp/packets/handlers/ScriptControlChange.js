const AbstractHandler = require('./AbstractHandler');

class ScriptControlChange extends AbstractHandler {
  handle(parameters) {
    const data = parameters.data;
    const agent = this.manager.client.agent;

    // takeControls
    // controls
    // passToAgent

    return false;
  }
}

module.exports = ScriptControlChange;
