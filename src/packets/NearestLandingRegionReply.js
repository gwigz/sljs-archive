/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * NearestLandingRegionReply
 */
class NearestLandingRegionReply extends Packet {
  static id = 145
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['landingRegionData', { quantity: 1, parameters: [['regionHandle', 'U64']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U64} [data.landingRegionData.regionHandle] RegionHandle
   */
  constructor (data = {}) {
    super(data)
  }
}

export default NearestLandingRegionReply
