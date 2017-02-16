import Collection from '../utilities/Collection'
import PacketLookup from './PacketLookup'

import * as Types from './types'

class Deserializer {
  async handle (buffer) {
    const Packet = PacketLookup.find(this.id(buffer))

    if (Packet === undefined) {
      // throw new Error(Constants.Errors.UNKNOWN_PACKET)
      return undefined
    }

    const packet = new Packet()

    if (this.zerocoded(buffer)) {
      buffer = this.dezerocode(buffer)
    }

    packet.index = this.sequence(buffer)
    packet.reliable = this.reliable(buffer)

    if (!('format' in Packet)) {
      return packet
    }

    let position = 6 + buffer.readUInt8(5)

    // Add additional length dependant on frequency.
    switch (Packet.frequency) {
      case 3:
      case 0:
        position += 4
        break

      case 1:
        position += 2
        break

      case 2:
        position += 1
        break
    }

    // Parse everythiiiing...
    for (const [block, format] of Packet.format) {
      packet.data[block] = new Collection()

      for (const [name, Type] of format.parameters) {
        switch (Type) {
          case Boolean:
            packet.data[block].set(name, !!buffer.readUInt8(position))
            position++
            break

          case Types.Variable1:
            const bits = buffer.readUInt8(position)
            const string = Type.fromBuffer(buffer, position + 1, position + bits)

            packet.data[block].set(name, string)
            position += bits + 1
            break

          case Types.Variable2:
            const bitsm = buffer.readUInt16LE(position)
            const stringm = Type.fromBuffer(buffer, position + 2, position + bitsm)

            packet.data[block].set(name, stringm)
            position += bitsm + 2
            break

          case Types.Quaternion:
            const quaternion = Type.fromBuffer(buffer, position)

            packet.data[block].set(name, quaternion)
            position += Types.size + (quaternion[3] ? 4 : 0)
            break

          default:
            packet.data[block].set(name, Type.fromBuffer(buffer, position))
            position += Types.size
            break
        }
      }
    }

    return packet
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

  reliable (buffer) {
    return !!(buffer[0] & 0x40)
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
}

export default Deserializer
