import dgram from 'dgram'

import { Constants } from '../utilities'

class Socket {
  constructor (core, type = 'udp4') {
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

  send (circuit, buffer) {
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

  async receive (buffer, info) {
    const circuit = this.core.circuits.get(`${info.address}:${info.port}`)

    if (circuit && buffer.length) {
      circuit.receive(circuit.deserializer.read(buffer))
    }
  }
}

export default Socket
