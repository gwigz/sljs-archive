/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RegionHandleRequest
 */
class RegionHandleRequest extends Packet {
  static id = 309
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['requestBlock', { quantity: 1, parameters: [['region', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.requestBlock.region] RegionID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RegionHandleRequest
