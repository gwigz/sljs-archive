import { UseCircuitCode, CompleteAgentMovement } from '../packets'

class Circuit {
  constructor (core, { id, address, port } = {} ) {
    this.id = id
    this.address = address
    this.port = port
    this.core = core
    this.active = false
    this.index = 1
  }

  get agent () {
    return this.core.agent
  }

  async send (...args) {
    await this.core.send(this, ...args)
  }

  handshake () {
    if (this.active) {
      return undefined
    }

    return Promise.all([
      this.send(new UseCircuitCode({
        circuitCode: {
          id: this.agent.id,
          code: this.id,
          session: this.agent.session
        }
      })),
      this.send(new CompleteAgentMovement({
        agentData: {
          agent: this.agent.id,
          session: this.agent.session,
          circuitCode: this.circuit
        }
      }))
    ])
  }
}

export default Circuit
