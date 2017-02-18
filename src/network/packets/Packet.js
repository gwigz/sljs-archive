class Packet {
  constructor (data = {}) {
    if (this.constructor === Packet) {
      throw new Error('Do not instantiate from the abstract packet class!')
    }

    this.data = data
  }
}

export default Packet
