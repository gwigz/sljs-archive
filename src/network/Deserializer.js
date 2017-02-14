/*
  import Acknowledger from './Acknowledger'
  import Handlers from './handlers'
  import MessageFormats from './MessageFormats'
  import Packet from './Packet'
  import PKID from '../../../utilities/Packets'

  const CurrentlyMutedPackets = [
    Packet.AttachedSound.id,
    Packet.AvatarAnimation.id,
    Packet.CoarseLocationUpdate.id,
    Packet.ImprovedTerseObjectUpdate.id,
    Packet.LayerData.id,
    Packet.ObjectUpdate.id,
    Packet.ObjectUpdateCached.id,
    Packet.PacketAck.id,
    Packet.ParcelOverlay.id,
    Packet.PreloadSound.id,
    Packet.ScriptControlChange.id,
    Packet.SimStats.id,
    Packet.SimulatorViewerTimeMessage.id,
    Packet.SoundTrigger.id,
    Packet.StartPingCheck.id,
    Packet.ViewerEffect.id
  ]
*/

class Deserializer {
  async handle (buffer) {
    console.log(buffer)
  }

  /*
    constructor (manager) {
      this.manager = manager
      this.formats = MessageFormats.load()
      this.ack = new Acknowledger(this)
      this.handlers = {}

      for (const handler in Handlers) {
        this.register(PKID[handler], Handlers[handler])
      }
    }

    format (packet) {
      return this.formats[packet.id] || undefined
    }

    name (packet) {
      return this.formats[packet.id] ? this.formats[packet.id].name : 'UnknownPacket'
    }

    register (pkid, Handler) {
      this.handlers[pkid] = new Handler(this.manager)
    }

    process (buffer) {
      // TODO: Change this to Packet.create()/new Packet() when possible.
      const packet = Packet.parse(buffer)

      if (packet.reliable) {
        this.ack.queue(packet.number)
      }

      // TODO: Move this debugging somehow, maybe just emit stuff here too.
      if (CurrentlyMutedPackets.indexOf(packet.id) === -1) {
        if (typeof this.handlers[packet.id] !== 'undefined') {
          process.stdout.write(`\x1b[33m\u276E\x1b[0m ${this.name(packet)} \x1b[33m${packet.id}\x1b[0m`)

          this.read(packet, buffer)

          if (this.handle(packet) === false) {
            process.stdout.write(' \x1b[33mignored\x1b[0m')
          }

          process.stdout.write('\n')
        } else if (CurrentlyMutedPackets.indexOf(packet.id) === -1) {
          console.log(`\x1b[31m\u276E\x1b[0m ${this.name(packet)} \x1b[33m${packet.id} \x1b[31munhandled\x1b[0m`)
        }
      } else if (typeof this.handlers[packet.id] !== 'undefined') {
        this.read(packet, buffer)
        this.handle(packet)
      }
    }

    read (packet, buffer) {
      packet.read(buffer, this.format(packet))
    }

    handle (packet) {
      return this.handlers[packet.id].handle(packet.parameters)
    }
  */
}

export default Deserializer
