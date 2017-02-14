/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * TransferPacket
 */
class TransferPacket extends Packet {
  static id = 17
  static frequency = 2
  static trusted = false
  static compression = false

  static format = new Collection([
    ['transferData', { quantity: 1, parameters: new Collection([['transfer', 'LLUUID'], ['channelType', 'S32'], ['packet', 'S32'], ['status', 'S32'], ['data', 'Variable2']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.transferData.transfer] TransferID
   * @param {S32} [data.transferData.channelType] ChannelType
   * @param {S32} [data.transferData.packet] Packet
   * @param {S32} [data.transferData.status] Status
   * @param {Variable2} [data.transferData.data] Data
   */
  constructor (data = {}) {
    super(data)
  }
}

export default TransferPacket
