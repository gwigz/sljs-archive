import { PacketAck } from './packets'
import { Collection } from '../utilities'

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
    this.pruner = setInterval(this.prune.bind(this), 1000)

    this.packets = {
      seen: new Collection,
      queued: new Set
    }
  }

  seen (number) {
    return this.packets.seen.has(number) || this.packets.queued.has(number)
  }

  queue (number) {
    this.packets.queued.add(number)
  }

  tick () {
    if (this.packets.queued.size) {
      const uptime = process.uptime()

      this.packet.data.packets = []

      for (const sequence of this.packets.queued) {
        this.packets.queued.delete(sequence)
        this.packets.seen.set(sequence, uptime)
        this.packet.data.packets.push({ id: sequence })
      }

      this.circuit.send(this.packet)
    }
  }

  prune () {
    if (!this.packets.seen.size) {
      return
    }

    const uptime = process.uptime()

    for (const [sequence, timestamp] of this.packets.seen) {
      if ((uptime - timestamp) > 5.0) {
        this.packets.seen.delete(sequence)
      } else {
        break
      }
    }
  }
}

export default Acknowledger
