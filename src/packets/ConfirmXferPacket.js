/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ConfirmXferPacket
 */
class ConfirmXferPacket extends Packet {
  static id = 19
  static frequency = 2
  static trusted = false
  static compression = false

  static format = new Collection([
    ['xfer', { quantity: 1, parameters: [['id', 'U64'], ['packet', 'U32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U64} [data.xfer.id] ID
   * @param {U32} [data.xfer.packet] Packet
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ConfirmXferPacket
