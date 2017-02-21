import * as Types from '../types'

class PacketBuffer {
  constructor (buffer) {
    if (this.zerocoded(buffer)) {
      this.buffer = this.dezerocode(buffer)
    } else {
      this.buffer = buffer
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

    switch (this.frequency) {
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
