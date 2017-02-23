import PacketLookup from './helpers/PacketLookup'
import PacketBuffer from './helpers/PacketBuffer'

import * as Types from './types'

/**
 * @link http://wiki.secondlife.com/wiki/Packet_Layout
 * @link http://wiki.secondlife.com/wiki/Message_Layout
 * @link http://wiki.secondlife.com/wiki/Pyogp/Client_Lib/Packet
 */
class Deserializer {
  read (buffer) {
    return new PacketBuffer(buffer)
  }

  lookup (buffer) {
    return PacketLookup.find(buffer.id)
  }

  convert (Packet, buffer) {
    const packet = new Packet()

    packet.index = buffer.sequence
    packet.reliable = buffer.reliable

    if (Packet.format === undefined) {
      return packet
    }

    // Set position and uncompress blocks, if we need too.
    buffer.prepare()

    // Parse everythiiiing...
    for (const [block, format] of Packet.format) {
      const quantity = format.quantity ? format.quantity : buffer.read(Types.U8)

      packet.data[block] = []

      // Loop through block dependant on quantity value...
      for (let i = 0; i < quantity; i++) {
        const parameters = {}

        for (const [name, Type] of format.parameters) {
          parameters[name] = buffer.read(Type)
        }

        packet.data[block].push(parameters)
      }
    }

    return packet
  }
}

export default Deserializer
