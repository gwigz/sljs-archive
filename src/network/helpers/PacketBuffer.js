import * as Types from '../types'

/**
 * @link http://wiki.secondlife.com/wiki/Packet_Layout
 */
class PacketBuffer {
  constructor (buffer) {
    this.buffer = buffer

    if (this.buffer.length < 7) {
      return
    }

    let header = this.zerocoded
      ? []
      : this.buffer.slice(6, Math.min(this.buffer.length, 12))

    if (header instanceof Array) {
      const offset = Math.min(this.buffer.length, 12)

      for (let i = 6; i < offset; i++) {
        if (this.buffer[i] === 0x00) {
          header.push(...new Array(this.buffer.readUInt8(++i)).fill(0x00))
        } else {
          header.push(this.buffer[i])
        }
      }
    }

    if (header[0] !== 0xFF) {
      this.id = Number(`${header[0]}2`)
      this.frequency = 2
    } else if (header[1] !== 0xFF) {
      this.id = Number(`${header[1]}1`)
      this.frequency = 1
    } else if (header[2] !== 0xFF) {
      this.id = Number(`${(header[2] << 8) + header[3]}0`)
      this.frequency = 0
    } else {
      this.id = Number(`${header[3]}3`)
      this.frequency = 3
    }
  }

  prepare () {
    if (this.zerocoded) {
      this.dezerocode()
    }

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

  dezerocode () {
    let output = [...this.buffer.slice(0, 6)]
    const length = this.buffer.length

    for (let i = 6; i < length; i++) {
      if (this.buffer[i] === 0x00) {
        output.push(...new Array(this.buffer.readUInt8(++i)).fill(0x00))
      } else {
        output.push(this.buffer[i])
      }
    }

    this.buffer = Buffer.from(output)
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
