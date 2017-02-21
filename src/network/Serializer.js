import Packet from './packets/Packet'

import { U8 } from './types'
import { Constants } from '../utilities'

class Serializer {
  constructor (circuit) {
    /**
     * Circuit instance that instantiated this Seralizer.
     *
     * @name Seralizer#circuit
     * @type {Circuit}
     * @readonly
     */
    Object.defineProperty(this, 'circuit', { value: circuit })

    this.index = 1
  }

  convert (packet) {
    if (!(packet instanceof Packet)) {
      throw new Error('Serializer is only able to convert instances of Packet.')
    }

    const array = [this.header(packet.constructor)]

    if (packet.constructor.format) {
      // Support skipping the block name in parameters.
      if (packet.constructor.format.size === 1) {
        const [[block, format]] = packet.constructor.format

        // Try and assume this correctly.
        if (!(block in packet.data) || Object.keys(packet.data) > 1) {
          return Buffer.concat(array.concat(this.parse(block, format, packet.data)))
        }
      }

      for (const [block, format] of packet.constructor.format) {
        if (!(block in packet.data)) {
          if (block === 'agentData') {
            packet.data[block] = [{}]
          } else {
            throw new Error(Constants.Errors.MISSING_BLOCK)
          }
        }

        if (!(packet.data[block] instanceof Array)) {
          packet.data[block] = [packet.data[block]]
        }

        const length = packet.data[block].length

        if (length > 255
          || (format.quantity
            && length !== format.quantity)
        ) {
          throw new Error(Constants.Errors.INVALID_BLOCK_QUANTITY)
        }

        if (!format.quantity) {
          // Prefix with variable block quantity.
          array.push(U8.toBuffer(length || 1))
        }

        for (const data of packet.data[block]) {
          array.push(this.parse(block, format, data))
        }
      }
    }

    return Buffer.concat(array)
  }

  header (packet) {
    const index = this.index++

    // First, append flags and packet sequence number/index.
    // http://wiki.secondlife.com/wiki/Packet_Layout
    const array = [
      0x00,
      index >> 24,
      index >> 16,
      index >> 8,
      index,
      0x00
    ]

    // Logic for additional header bytes dependant on packet type/frequency.
    if (packet.frequency !== 2) {
      array.push(0xFF)

      if (packet.frequency !== 1) {
        array.push(0xFF)
      }

      if (packet.frequency === 0) {
        array.push((packet.id >> 8) & 0xFF)
      } else if (packet.frequency === 3) {
        array.push(0xFF)
      }
    }

    // Append remaining section of the packet identifier.
    array.push(packet.id & 0xFF)

    // Pass buffer object.
    return Buffer.from(array)
  }

  parse (block, format, data = {}) {
    const array = []

    if (data instanceof Array) {
      for (const section of data) {
        array.push(this.parse(block, format, section))
      }

      return Buffer.concat(array)
    }

    // Attempt to fill optional parts of agent data blocks.
    if (block === 'agentData') {
      for (const [name] of format.parameters) {
        if (name in data) {
          continue
        }

        switch (name) {
          case 'agent':
            data.agent = this.circuit.agent.id
            break

          case 'session':
            data.session = this.circuit.session
            break

          case 'circuitCode':
            data.circuitCode = this.circuit.id
            break

          default:
            throw new Error(Constants.Errors.MISSING_PARAMETER)
        }
      }
    }

    for (const [name, Type] of format.parameters) {
      if (!(name in data)) {
        throw new Error(Constants.Errors.MISSING_PARAMETER)
      }

      if (Type === Boolean) {
        array.push(Buffer.from([data[name] === true]))
      } else {
        array.push(Type.toBuffer(data[name]))
      }
    }

    return Buffer.concat(array)
  }
}

export default Serializer
