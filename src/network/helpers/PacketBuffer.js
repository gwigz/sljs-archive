import * as Types from '../types'

class PacketBuffer {
  constructor (buffer, frequency) {
    if (this.zerocoded(buffer)) {
      this.buffer = this.dezerocode(buffer)
    } else {
      this.buffer = buffer
    }

    // Add additional length dependant on frequency.
    switch (frequency) {
      case 3:
      case 0:
        this.position = buffer.readUInt8(5) + 10
        break

      case 1:
        this.position = buffer.readUInt8(5) + 8
        break

      case 2:
        this.position = buffer.readUInt8(5) + 7
        break
    }
  }

  static id (buffer) {
    if (buffer[6] !== 0xFF) {
      return Number(`${buffer[6]}2`)
    } else if (buffer[7] !== 0xFF) {
      return Number(`${this.buffer[7]}1`)
    } else if (buffer[8] !== 0xFF) {
      return Number(`${buffer.readUInt16BE(8)}0`)
    } else {
      return Number(`${buffer[9]}3`)
    }
  }

  get id () {
    return PacketBuffer.id(this.buffer)
  }

  get sequence () {
    return (this.buffer[1] << 24) | (this.buffer[2] << 16) | (this.buffer[3] << 8) | this.buffer[4]
  }

  get reliable () {
    return !!(this.buffer[0] & 0x40)
  }

  zerocoded (buffer) {
    return !!(buffer[0] & 0x80)
  }

  dezerocode (buffer) {
    const length = buffer.length

    let position = 6
    let output = []

    // Fetch most of the packet headers normally.
    for (let i = 0; i < 6; i++) {
      output.push(buffer[i])
    }

    // Clean the rest.
    for (let i = position; i < length; i++) {
      if (buffer[i] === 0x00) {
        for (let j = 0; j < buffer.readUInt8(i + 1); j++) {
          output[position++] = 0x00
        }

        i++
      } else {
        output[position++] = buffer[i]
      }
    }

    return Buffer.from(output)
  }

  read (Type) {
    const output = this.fetch(Type)

    switch (Type) {
      case Boolean:
      case String:
        break

      case Types.Variable1:
        this.position += this.buffer.readUInt8(this.position)
        break

      case Types.Variable2:
        this.position += this.buffer.readUInt16LE(this.position)
        break

      case Types.Quaternion:
        this.position += Type.size + (output[3] ? 4 : 0)
        break

      default:
        this.position += Type.size
        break
    }

    return output
  }

  fetch (Type) {
    switch (Type) {
      case Boolean:
        return !!this.buffer.readUInt8(this.position++)

      case Types.Quaternion:
        return Type.fromBuffer(this.buffer, this.position)

      default:
        return Type.fromBuffer(this.buffer, this.position)
    }
  }
}

export default PacketBuffer
