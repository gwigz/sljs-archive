/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * CheckParcelSales
 */
class CheckParcelSales extends Packet {
  static id = 225
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['regionData', { parameters: new Collection([['regionHandle', 'U64']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U64} [data.regionData.regionHandle] RegionHandle
   */
  constructor (data = {}) {
    super(data)
  }
}

export default CheckParcelSales
