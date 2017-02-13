import dgram from 'dgram'

import Deserializer from './Deserializer'
import Serializer from './Serializer'

class Socket {
  constructor (core, type = 'udp4') {
    this.core = core

    this.deserializer = new Deserializer
    this.serializer = new Serializer

    this.socket = dgram.createSocket({ type: type })

    this.socket.on('message', this.receive.bind(this))
    this.socket.on('error', this.error.bind(this))
  }

  async send (circuit, ...args) {
    const buffer = await this.serializer.convert(...args)

    if (buffer) {
      this.socket.send(buffer, circuit.port, circuit.address)
    }
  }

  receive (buffer, info) {
    this.client.circuits.get(`${info.address}:${info.port}`).receive(
      this.deserializer.handle(buffer)
    )
  }

  error (error) {
    throw error
  }
}

export default Socket
