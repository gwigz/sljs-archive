import Acknowledger from './Acknowledger'
import Deserializer from './Deserializer'
import Serializer from './Serializer'

import * as Delegates from './delegates'

import { Agent } from '../structures'
import { Constants } from '../utilities'

import { CompleteAgentMovement, UseCircuitCode } from './packets'

class Circuit {
  constructor (core, { id, address, port } = {}) {
    /**
     * Core instance that instantiated this Circuit.
     *
     * @name Circuit#core
     * @type {Core}
     * @readonly
     */
    Object.defineProperty(this, 'core', { value: core })

    this.id = id
    this.address = address
    this.port = port
    this.dead = true
    this.acknowledger = new Acknowledger(this)
    this.deserializer = new Deserializer
    this.serializer = new Serializer(this)
    this.delegates = {}

    this.register(Delegates)
  }

  get agent (): Agent {
    return this.core.agent
  }

  get session (): number {
    return this.core.agent.session
  }

  public send (...args): void {
    if (this.dead) {
      throw new Error(Constants.Errors.INACTIVE_CIRCUIT)
    }

    for (const packet of [...args]) {
      try {
        this.core.emit('sending', packet.constructor.name)
        this.core.send(this, this.serializer.convert(packet))
      } catch (error) {
        this.core.client.emit(Constants.Events.ERROR, error)
      }
    }
  }

  public async receive (buffer): void {
    if (buffer.reliable) {
      if (this.acknowledger.seen(buffer.sequence)) {
        return
      }

      this.acknowledger.queue(buffer.sequence)
    }

    const Packet = this.deserializer.lookup(buffer)

    if (!Packet) {
      return
    }

    this.core.emit('received', Packet.name)

    if (Packet.name in this.delegates
      && this.delegates[Packet.name].waiting
    ) {
      this.delegates[Packet.name]
        .handle(this.deserializer.convert(Packet, buffer))
        .catch(console.error)
    }
  }

  public handshake (): void {
    if (!this.dead) {
      throw new Error(Constants.Errors.HANDSHAKE_ACTIVE_CIRCUIT)
    }

    this.dead = false

    return this.send(
      new UseCircuitCode({
        id: this.agent.id,
        code: this.id,
        session: this.session
      }),
      new CompleteAgentMovement()
    )
  }

  public register (delegates): void {
    for (const Delegate of Object.values(delegates)) {
      this.delegates[Delegate.name] = new Delegate(this)
    }
  }
}

export default Circuit
