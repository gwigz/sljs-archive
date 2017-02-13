/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * TransferInfo
 */
class TransferInfo extends Packet {
  static id = 154
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['transferInfo', { quantity: 1, parameters: [['transfer', 'LLUUID'], ['channelType', 'S32'], ['targetType', 'S32'], ['status', 'S32'], ['size', 'S32'], ['params', 'Variable2']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.transferInfo.transfer] TransferID
   * @param {S32} [data.transferInfo.channelType] ChannelType
   * @param {S32} [data.transferInfo.targetType] TargetType
   * @param {S32} [data.transferInfo.status] Status
   * @param {S32} [data.transferInfo.size] Size
   * @param {Variable2} [data.transferInfo.params] Params
   */
  constructor (data = {}) {
    super(data)
  }
}

export default TransferInfo
