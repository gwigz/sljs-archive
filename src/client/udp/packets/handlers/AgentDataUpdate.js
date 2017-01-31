const AbstractHandler = require('./AbstractHandler');

class AgentDataUpdate extends AbstractHandler {
  handle(parameters) {
    const data = parameters.agentData;
    const agent = this.manager.client.agent;

    agent.id = data.agent;
    agent.firstname = data.firstName;
    agent.lastname = data.lastName;

    // TODO: Add a structure for this?
    agent.group = {
      id: data.activeGroup,
      name: data.groupName,
      title: data.groupTitle,
      permissions: data.groupPowers
    };
  }
}

module.exports = AgentDataUpdate;
