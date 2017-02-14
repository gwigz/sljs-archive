/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RpcChannelReply
 */
class RpcChannelReply extends Packet {
  static id = 414
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['dataBlock', { quantity: 1, parameters: new Collection([['task', 'LLUUID'], ['item', 'LLUUID'], ['channel', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.dataBlock.task] TaskID
   * @param {LLUUID} [data.dataBlock.item] ItemID
   * @param {LLUUID} [data.dataBlock.channel] ChannelID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RpcChannelReply
