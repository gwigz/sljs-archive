/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * PacketAck
 */
class PacketAck extends Packet {
  static id = 4294967291
  static frequency = 3
  static trusted = false
  static compression = false

  static format = new Collection([
    ['packets', { parameters: [['id', 'U32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U32} [data.packets.id] ID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default PacketAck
