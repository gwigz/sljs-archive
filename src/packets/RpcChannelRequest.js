/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RpcChannelRequest
 */
class RpcChannelRequest extends Packet {
  static id = 413
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['dataBlock', { quantity: 1, parameters: new Collection([['gridX', 'U32'], ['gridY', 'U32'], ['task', 'LLUUID'], ['item', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U32} [data.dataBlock.gridX] GridX
   * @param {U32} [data.dataBlock.gridY] GridY
   * @param {LLUUID} [data.dataBlock.task] TaskID
   * @param {LLUUID} [data.dataBlock.item] ItemID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RpcChannelRequest
