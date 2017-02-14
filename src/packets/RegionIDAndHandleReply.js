/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RegionIDAndHandleReply
 */
class RegionIDAndHandleReply extends Packet {
  static id = 310
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['replyBlock', { quantity: 1, parameters: new Collection([['region', 'LLUUID'], ['regionHandle', 'U64']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.replyBlock.region] RegionID
   * @param {U64} [data.replyBlock.regionHandle] RegionHandle
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RegionIDAndHandleReply
