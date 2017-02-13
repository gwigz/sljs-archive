/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RegionPresenceRequestByHandle
 */
class RegionPresenceRequestByHandle extends Packet {
  static id = 15
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['regionData', { parameters: [['regionHandle', 'U64']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U64} [data.regionData.regionHandle] RegionHandle
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RegionPresenceRequestByHandle
