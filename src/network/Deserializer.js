import PacketLookup from './helpers/PacketLookup'
import PacketBuffer from './helpers/PacketBuffer'

import * as Types from './types'

class Deserializer {
  lookup (buffer) {
    return PacketLookup.find(PacketBuffer.id(buffer))
  }

  convert (Packet, buffer) {
    const packet = new Packet()

    // Use our helper method to read stuff, keep track of current position, etc.
    buffer = new PacketBuffer(buffer, Packet.frequency)

    packet.index = buffer.sequence
    packet.reliable = buffer.reliable

    if (!('format' in Packet)) {
      return packet
    }

    // Parse everythiiiing...
    for (const [block, format] of Packet.format) {
      const quantity = 'quantity' in format ? format.quantity : buffer.read(Types.U8)

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
