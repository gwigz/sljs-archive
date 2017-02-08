const AcknowledgeQueueHandler = require('./AcknowledgeQueueHandler')
const Handlers = require('./handlers')
const MessageFormats = require('./MessageFormats')
const Packet = require('./Packet')
const PKID = require('../../../utilities/Packets')

const CurrentlyMutedPackets = [
  PKID.AttachedSound,
  PKID.AvatarAnimation,
  PKID.CoarseLocationUpdate,
  PKID.ImprovedTerseObjectUpdate,
  PKID.LayerData,
  PKID.ObjectUpdate,
  PKID.ObjectUpdateCached,
  PKID.PacketAck,
  PKID.ParcelOverlay,
  PKID.PreloadSound,
  PKID.ScriptControlChange,
  PKID.SimStats,
  PKID.SimulatorViewerTimeMessage,
  PKID.SoundTrigger,
  PKID.StartPingCheck,
  PKID.ViewerEffect
]

class PacketHandler {
  constructor (manager) {
    this.manager = manager
    this.formats = MessageFormats.load()
    this.ack = new AcknowledgeQueueHandler(this)
    this.handlers = {}

    for (const handler in Handlers) {
      this.register(PKID[handler], Handlers[handler])
    }
  }

  /**
   * Returns PacketFormat for known Packets.
   * @param {Packet} packet Packet object to lookup by PKID
   * @returns {?PacketFormat}
   */
  format (packet) {
    return this.formats[packet.id] || undefined
  }

  /**
   * Returns String from PacketFormat that Packet ID value refers too.
   * @param {Packet} packet Packet object to lookup by PKID
   * @returns {?string}
   */
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
}

module.exports = PacketHandler
