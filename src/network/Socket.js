import dgram from 'dgram'

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

    this.socket = dgram.createSocket({ type: type })

    this.socket.on('message', this.receive.bind(this))
    this.socket.on('error', this.error.bind(this))
  }

  send (circuit, buffer) {
    if (buffer instanceof Buffer) {
      this.socket.send(buffer, circuit.port, circuit.address)
    }
  }

  async receive (buffer, info) {
    this.core.circuits.get(`${info.address}:${info.port}`).receive(buffer)
  }

  error (error) {
    throw error
  }
}

export default Socket
