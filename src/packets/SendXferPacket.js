/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SendXferPacket
 */
class SendXferPacket extends Packet {
  static id = 18
  static frequency = 2
  static trusted = false
  static compression = false

  static format = new Collection([
    ['xfer', { quantity: 1, parameters: new Collection([['id', 'U64'], ['packet', 'U32']]) }],
    ['dataPacket', { quantity: 1, parameters: new Collection([['data', 'Variable2']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U64} [data.xfer.id] ID
   * @param {U32} [data.xfer.packet] Packet
   * @param {Variable2} [data.dataPacket.data] Data
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SendXferPacket
