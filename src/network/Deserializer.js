import PacketLookup from './PacketLookup'

class Deserializer {
  async handle (buffer) {
    const Packet = PacketLookup.find(this.id(buffer))

    if (Packet) {
      console.log(`${Packet.name} recieved!`)
    }
  }

  id (buffer) {
    if (buffer[6] !== 0xFF) {
      return Number(`${buffer[6]}2`)
    } else if (buffer[7] !== 0xFF) {
      return Number(`${buffer[7]}1`)
    } else if (buffer[8] !== 0xFF) {
      return Number(`${buffer.readUInt16BE(8)}0`)
    } else {
      return Number(`${buffer[9]}3`)
    }
  }

  sequence (buffer) {
    return (buffer[1] << 24) | (buffer[2] << 16) | (buffer[3] << 8) | buffer[4]
  }

  zerocoded (buffer) {
    return !!(buffer[0] & 0x80)
  }

  reliable (buffer) {
    return !!(buffer[0] & 0x40)
  }

  frequency (buffer) {
    if (buffer[6] !== 0xFF) {
      return 2
    } else if (buffer[7] !== 0xFF) {
      return 1
    } else if (buffer[8] !== 0xFF) {
      return 0
    } else {
      return 3
    }
  }
}

export default Deserializer
