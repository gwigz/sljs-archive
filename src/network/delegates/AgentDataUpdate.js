import Delegate from './Delegate'

class AgentDataUpdate extends Delegate {
  handle (parameters) {
    const data = parameters.agentData[0]
    const agent = this.circuit.agent

    agent.id = data.agent
    agent.firstname = data.firstName
    agent.lastname = data.lastName

    // TODO: Fetch group object via. data.activeGroup!
    /*
      agent.group = {
        id: data.activeGroup,
        name: data.groupName,
        title: data.groupTitle,
        permissions: data.groupPowers
      }
    */
  }
}

export default AgentDataUpdate
