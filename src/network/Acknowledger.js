import { PacketAck } from './packets'

class Acknowledger {
  constructor (circuit) {
    /**
     * Circuit instance that instantiated this Acknowledger.
     *
     * @name Acknowledger#circuit
     * @type {Circuit}
     * @readonly
     */
    Object.defineProperty(this, 'circuit', { value: circuit })

    this.packet = new PacketAck({ packets: [] })
    this.timer = setInterval(this.tick.bind(this), 100)
    this.packets = []
  }

  queue (number) {
    this.packets.push(number)
  }

  tick () {
    if (this.packets.length) {
      this.packet.data.packets = this.packets.splice(0, 255).map(id => ({ id: id }))
      this.circuit.send(this.packet)
    }
  }
}

export default Acknowledger
