/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * TransferAbort
 */
class TransferAbort extends Packet {
  static id = 155
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['transferInfo', { quantity: 1, parameters: new Collection([['transfer', 'LLUUID'], ['channelType', 'S32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.transferInfo.transfer] TransferID
   * @param {S32} [data.transferInfo.channelType] ChannelType
   */
  constructor (data = {}) {
    super(data)
  }
}

export default TransferAbort
