const PKID = require('../../utilities/Packets')

class Methods {
  constructor(parent) {
    this.manager = parent
    this.client = parent.client
  }

  get handler() {
    return this.manager.handler
  }

  get agent() {
    return this.client.agent
  }

  get session() {
    return this.client.agent.session
  }

  get simulator() {
    return this.client.simulator
  }

  get circuit() {
    return this.agent.circuit || this.simulator.circuit
  }

  useCircuitCode() {
    return this.manager.send(PKID.UseCircuitCode, {
      circuitCode: {
        code: this.circuit,
        session: this.session,
        id: this.agent.id
      }
    })
  }

  completeAgentMovement() {
    return this.manager.send(PKID.CompleteAgentMovement, {
      agentData: {
        agent: this.agent.id,
        session: this.session,
        circuitCode: this.circuit
      }
    })
  }

  logoutRequest() {
    return this.manager.send(PKID.LogoutRequest, {
      agentData: {
        agent: this.agent.id,
        session: this.session
      }
    })
  }
}

module.exports = Methods
