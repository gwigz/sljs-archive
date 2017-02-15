import { UseCircuitCode, CompleteAgentMovement } from './packets'
import { Constants } from '../utilities'

class Circuit {
  constructor (core, { id, address, port } = {}) {
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

  get session () {
    return this.core.agent.session
  }

  async send (...args) {
    if (!this.active) {
      throw new Error(Constants.Error.INACTIVE_CIRCUIT)
    }

    await this.core.send(this, ...args)
  }

  handshake () {
    if (this.active) {
      throw new Error(Constants.Error.HANDSHAKE_ACTIVE_CIRCUIT)
    }

    return Promise.all([
      this.send(new UseCircuitCode({
        id: this.agent.id,
        code: this.id,
        session: this.session
      })),
      this.send(new CompleteAgentMovement)
    ])
  }
}

export default Circuit
