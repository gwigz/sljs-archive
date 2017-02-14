/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ObjectUpdateCached
 */
class ObjectUpdateCached extends Packet {
  static id = 14
  static frequency = 2
  static trusted = true
  static compression = false

  static format = new Collection([
    ['regionData', { quantity: 1, parameters: new Collection([['regionHandle', 'U64'], ['timeDilation', 'U16']]) }],
    ['objectData', { parameters: new Collection([['id', 'U32'], ['cRC', 'U32'], ['updateFlags', 'U32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U64} [data.regionData.regionHandle] RegionHandle
   * @param {U16} [data.regionData.timeDilation] TimeDilation
   * @param {U32} [data.objectData.id] ID
   * @param {U32} [data.objectData.cRC] CRC
   * @param {U32} [data.objectData.updateFlags] UpdateFlags
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ObjectUpdateCached
