/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RegionPresenceRequestByRegionID
 */
class RegionPresenceRequestByRegionID extends Packet {
  static id = 14
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['regionData', { parameters: new Collection([['region', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.regionData.region] RegionID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RegionPresenceRequestByRegionID
