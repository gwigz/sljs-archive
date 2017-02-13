/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * TransferRequest
 */
class TransferRequest extends Packet {
  static id = 153
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['transferInfo', { quantity: 1, parameters: [['transfer', 'LLUUID'], ['channelType', 'S32'], ['sourceType', 'S32'], ['priority', 'F32'], ['params', 'Variable2']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.transferInfo.transfer] TransferID
   * @param {S32} [data.transferInfo.channelType] ChannelType
   * @param {S32} [data.transferInfo.sourceType] SourceType
   * @param {F32} [data.transferInfo.priority] Priority
   * @param {Variable2} [data.transferInfo.params] Params
   */
  constructor (data = {}) {
    super(data)
  }
}

export default TransferRequest
