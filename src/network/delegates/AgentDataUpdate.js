import Delegate from './Delegate'

class AgentDataUpdate extends Delegate {
  async handle (packet) {
    const data = packet.data.agentData[0]
    const agent = this.client.agent

    agent.key = data.agent
    agent.firstname = data.firstName.toString('utf8').slice(0, -1)
    agent.lastname = data.lastName.toString('utf8').slice(0, -1)

    /*
      agent.group = {
        key: data.activeGroup,
        name: data.groupName,
        title: data.groupTitle,
        permissions: data.groupPowers
      }
    */
  }
}

export default AgentDataUpdate
