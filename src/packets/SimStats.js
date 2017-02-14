/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SimStats
 */
class SimStats extends Packet {
  static id = 140
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['region', { quantity: 1, parameters: new Collection([['regionX', 'U32'], ['regionY', 'U32'], ['regionFlags', 'U32'], ['objectCapacity', 'U32']]) }],
    ['stat', { parameters: new Collection([['stat', 'U32'], ['statValue', 'F32']]) }],
    ['pidStat', { quantity: 1, parameters: new Collection([['pID', 'S32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U32} [data.region.regionX] RegionX
   * @param {U32} [data.region.regionY] RegionY
   * @param {U32} [data.region.regionFlags] RegionFlags
   * @param {U32} [data.region.objectCapacity] ObjectCapacity
   * @param {U32} [data.stat.stat] StatID
   * @param {F32} [data.stat.statValue] StatValue
   * @param {S32} [data.pidStat.pID] PID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SimStats
