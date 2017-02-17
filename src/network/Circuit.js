import Deserializer from './Deserializer'
import Serializer from './Serializer'

import * as Delegates from './delegates'

import { UseCircuitCode, CompleteAgentMovement } from './packets'
import { Constants } from '../utilities'

class Circuit {
  constructor (core, { id, address, port } = {}) {
    this.id = id
    this.address = address
    this.port = port
    this.core = core
    this.active = false
    this.deserializer = new Deserializer
    this.serializer = new Serializer(this)
    this.delegates = {}

    this.register(Delegates)
  }

  get agent () {
    return this.core.agent
  }

  get session () {
    return this.core.agent.session
  }

  async send (...args) {
    if (!this.active) {
      throw new Error(Constants.Errors.INACTIVE_CIRCUIT)
    }

    for (const packet of [...args]) {
      this.core.send(this, this.serializer.convert(packet))
    }
  }

  async receive (buffer) {
    const Packet = this.deserializer.lookup(buffer)

    if (Packet && Packet.name in Delegates) {
      this.delegates[Packet.name].handle(
        this.deserializer.convert(Packet, buffer)
      )
    }
  }

  handshake () {
    if (this.active) {
      throw new Error(Constants.Errors.HANDSHAKE_ACTIVE_CIRCUIT)
    }

    this.active = true

    return this.send(
      new UseCircuitCode({
        id: this.agent.id,
        code: this.id,
        session: this.session
      }),
      new CompleteAgentMovement({
        circuitCode: this.id
      })
    )
  }

  register (delegates) {
    for (const Delegate of Object.values(delegates)) {
      this.delegates[Delegate.name] = new Delegate(this)
    }
  }
}

export default Circuit
