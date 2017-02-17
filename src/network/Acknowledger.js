import { PacketAck } from './packets'

class Acknowledger {
  constructor (core) {
    /**
     * Core instance that instantiated this Acknowledger.
     *
     * @name Acknowledger#core
     * @type {Core}
     * @readonly
     */
    Object.defineProperty(this, 'core', { value: core })

    this.packet = new PacketAck({ packets: [] })
    this.timer = setInterval(this.tick.bind(this), 2000)
    this.packets = []
  }

  queue (number) {
    this.packets.push(number)
  }

  tick () {
    if (this.packets.length) {
      this.packet.data.packets = this.packets.splice(0, 255).map(id => ({ id: id }))
      this.core.send(this.packet)
    }
  }
}

export default Acknowledger
