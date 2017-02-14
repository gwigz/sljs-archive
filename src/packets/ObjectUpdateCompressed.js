/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ObjectUpdateCompressed
 */
class ObjectUpdateCompressed extends Packet {
  static id = 13
  static frequency = 2
  static trusted = true
  static compression = false

  static format = new Collection([
    ['regionData', { quantity: 1, parameters: new Collection([['regionHandle', 'U64'], ['timeDilation', 'U16']]) }],
    ['objectData', { parameters: new Collection([['updateFlags', 'U32'], ['data', 'Variable2']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U64} [data.regionData.regionHandle] RegionHandle
   * @param {U16} [data.regionData.timeDilation] TimeDilation
   * @param {U32} [data.objectData.updateFlags] UpdateFlags
   * @param {Variable2} [data.objectData.data] Data
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ObjectUpdateCompressed
