import * as Types from '../types'

/**
 * @link http://wiki.secondlife.com/wiki/Packet_Layout
 */
class PacketBuffer {
  constructor (buffer) {
    this.buffer = buffer

    if (this.zerocoded) {
      this.buffer = this.dezerocode(buffer)
    }

    if (this.buffer.length < 8) {
      return
    }

    if (this.buffer[6] !== 0xFF) {
      this.id = Number(`${this.buffer[6]}2`)
      this.frequency = 2
    } else if (this.buffer[7] !== 0xFF) {
      this.id = Number(`${this.buffer[7]}1`)
      this.frequency = 1
    } else if (this.buffer[8] !== 0xFF) {
      this.id = Number(`${this.buffer.readUInt16BE(8)}0`)
      this.frequency = 0
    } else {
      this.id = Number(`${this.buffer[9]}3`)
      this.frequency = 3
    }
  }

  prepare () {
    switch (this.frequency) {
      case 3:
      case 0:
        this.position = this.buffer.readUInt8(5) + 10
        break

      case 1:
        this.position = this.buffer.readUInt8(5) + 8
        break

      case 2:
        this.position = this.buffer.readUInt8(5) + 7
        break
    }

    return this
  }

  get sequence () {
    return (this.buffer[1] << 24) | (this.buffer[2] << 16) | (this.buffer[3] << 8) | this.buffer[4]
  }

  get acks () {
    return !!(this.buffer[0] & 0x10)
  }

  get resent () {
    return !!(this.buffer[0] & 0x20)
  }

  get reliable () {
    return !!(this.buffer[0] & 0x40)
  }

  get zerocoded () {
    return !!(this.buffer[0] & 0x80)
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
        break

      case Types.Variable1:
        this.position += this.buffer.readUInt8(this.position) + 1
        break

      case Types.Variable2:
        this.position += this.buffer.readUInt16LE(this.position) + 2
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
