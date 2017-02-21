import PacketLookup from './helpers/PacketLookup'
import PacketBuffer from './helpers/PacketBuffer'

import * as Types from './types'

class Deserializer {
  read (buffer) {
    return new PacketBuffer(buffer)
  }

  lookup (pbo) {
    return PacketLookup.find(pbo.id)
  }

  convert (Packet, pbo) {
    const packet = new Packet()

    packet.index = pbo.sequence
    packet.reliable = pbo.reliable

    if (Packet.format === undefined) {
      return packet
    }

    // Parse everythiiiing...
    for (const [block, format] of Packet.format) {
      const quantity = format.quantity ? format.quantity : pbo.read(Types.U8)

      packet.data[block] = []

      // Loop through block dependant on quantity value...
      for (let i = 0; i < quantity; i++) {
        const parameters = {}

        for (const [name, Type] of format.parameters) {
          parameters[name] = pbo.read(Type)
        }

        packet.data[block].push(parameters)
      }
    }

    return packet
  }
}

export default Deserializer
