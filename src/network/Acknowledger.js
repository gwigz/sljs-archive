import Packet from './Packet'
import PKID from '../../../utilities/Packets'

class Acknowledger {
  constructor (handler) {
    this.manager = handler.manager
    this.packet = Packet.create(PKID.PacketAck, { packets: [] })
    this.timer = setInterval(this.tick.bind(this), 2000)
    this.packets = []
  }

  queue (number) {
    this.packets.push(number)
  }

  tick () {
    if (this.packets.length) {
      this.packet.parameters.packets = this.packets.splice(0, 255).map((id) => ({ id: id }))
      this.manager.send(this.packet)
    }
  }
}

export default Acknowledger
