/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * TeleportLandingStatusChanged
 */
class TeleportLandingStatusChanged extends Packet {
  static id = 147
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['regionData', { quantity: 1, parameters: [['regionHandle', 'U64']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U64} [data.regionData.regionHandle] RegionHandle
   */
  constructor (data = {}) {
    super(data)
  }
}

export default TeleportLandingStatusChanged
