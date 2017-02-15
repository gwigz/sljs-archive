import Serializer from './Serializer'

import { UseCircuitCode, CompleteAgentMovement } from './packets'
import { Constants } from '../utilities'

class Circuit {
  constructor (core, { id, address, port } = {}) {
    this.id = id
    this.address = address
    this.port = port
    this.core = core
    this.active = false
    this.serializer = new Serializer(core)
  }

  get agent () {
    return this.core.agent
  }

  get session () {
    return this.core.agent.session
  }

  async send () {
    if (!this.active) {
      throw new Error(Constants.Errors.INACTIVE_CIRCUIT)
    }

    for (const packet of arguments) {
      this.core.send(this, await this.serializer.convert(packet))
    }
  }

  async receive (buffer) {
    // ...
  }

  handshake () {
    if (this.active) {
      throw new Error(Constants.Errors.HANDSHAKE_ACTIVE_CIRCUIT)
    }

    this.active = true

    return Promise.all([
      this.send(new UseCircuitCode({
        id: this.agent.id,
        code: this.id,
        session: this.session
      })),
      this.send(new CompleteAgentMovement({
        circuitCode: this.id
      }))
    ])
  }
}

export default Circuit
