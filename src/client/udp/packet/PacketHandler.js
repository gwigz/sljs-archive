const AcknowledgeQueueHandler = require('./AcknowledgeQueueHandler')
const Handlers = require('./handlers')
const MessageFormats = require('./MessageFormats')
const Packet = require('./Packet')
const PKID = require('../../../utilities/Packets')

class PacketHandler {
  constructor(manager) {
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
  format(packet) {
    return this.formats[packet.id] || undefined
  }

  /**
   * Returns String from PacketFormat that Packet ID value refers too.
   * @param {Packet} packet Packet object to lookup by PKID
   * @returns {?string}
   */
  name(packet) {
    return this.formats[packet.id] ? this.formats[packet.id].name : 'UnknownPacket'
  }

  register(pkid, Handler) {
    this.handlers[pkid] = new Handler(this.manager)
  }

  process(buffer) {
    let packet = Packet.parse(this, buffer)

    if (packet.reliable) {
      this.ack.queue(packet.number)
    }

    // TODO: Move this debugging somehow.
    if (typeof this.handlers[packet.id] === 'undefined') {
      console.log(`\x1b[31m\u276E\x1b[0m ${this.name(packet)} \x1b[31munhandled\x1b[0m`)
    } else {
      process.stdout.write(`\x1b[33m\u276E\x1b[0m ${this.name(packet)}`)

      if (this.handlers[packet.id].handle(packet.parameters) === false) {
        process.stdout.write(' \x1b[33mignored\x1b[0m')
      }

      process.stdout.write('\n')
    }
  }
}

module.exports = PacketHandler
