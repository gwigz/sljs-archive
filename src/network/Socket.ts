import dgram from 'dgram'

import { Constants } from '../utilities'

import Circuit from './Circuit'
import Core from './Core'

class Socket {
  public readonly core: Core
  private socket: any

  constructor (core: Core, type = 'udp4') {
    /**
     * Core instance that instantiated this Socket.
     *
     * @name Socket#core
     * @type {Core}
     * @readonly
     */
    Object.defineProperty(this, 'core', { value: core })

    this.socket = dgram.createSocket(type, this.receive.bind(this))
  }

  public send (circuit: Circuit, buffer: Buffer): void {
    if (!(buffer instanceof Buffer)) {
      return null
    }

    return new Promise((resolve) => {
      this.socket.send(buffer, circuit.port, circuit.address, (error) => {
        if (error) {
          this.core.client.emit(Constants.Events.ERROR, error)
        }

        resolve()
      })
    })
  }

  public async receive (buffer: Buffer, info: any): void {
    const circuit = this.core.circuits.get(`${info.address}:${info.port}`)

    if (circuit && buffer.length) {
      circuit.receive(circuit.deserializer.read(buffer))
    }
  }
}

export default Socket
