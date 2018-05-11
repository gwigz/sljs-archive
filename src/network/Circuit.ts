import Acknowledger from './Acknowledger'
import Core from './Core'
import Deserializer from './Deserializer'
import Serializer from './Serializer'

import * as Delegates from './delegates'

import { Agent } from '../structures'
import { Constants } from '../utilities'

import { CompleteAgentMovement, UseCircuitCode } from './packets'

interface ICircuitOptions {
  id: number,
  address: string,
  port: number
}

class Circuit {
  public readonly core: Core

  public readonly id: number
  public readonly address: string
  public readonly port: number

  public readonly acknowledger: Acknowledger
  public readonly deserializer: Deserializer
  public readonly serializer: Serializer

  protected delegates: any
  protected dead: boolean

  constructor (core: Core, data: ICircuitOptions) {
    /**
     * Core instance that instantiated this Circuit.
     *
     * @name Circuit#core
     * @type {Circuit}
     * @readonly
     */
    Object.defineProperty(this, 'core', { value: core })

    this.id = data.id
    this.address = data.address
    this.port = data.port
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
        this.core.send(this, this.serializer.convert(packet))
        this.core.client.emit('sending', packet.constructor.name)
      } catch (error) {
        this.core.client.emit(Constants.Events.ERROR, error)
      }
    }
  }

  public receive (buffer): void {
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

    this.core.client.emit('received', Packet.name)

    if (Packet.name in this.delegates
      && this.delegates[Packet.name].waiting
    ) {
      // TODO: Make this async?
      this.delegates[Packet.name]
        .handle(this.deserializer.convert(Packet, buffer))
        // .catch(console.error)
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

  public register (delegates: any): void {
    for (const Delegate of Object.values(delegates) as Array<typeof Delegates.Delegate>) {
      if (Delegate !== Delegates.Delegate) {
        this.delegates[Delegate.name] = new Delegate(this)
      }
    }
  }
}

export default Circuit
export { ICircuitOptions }
