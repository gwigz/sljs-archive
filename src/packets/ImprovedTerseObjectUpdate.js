/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ImprovedTerseObjectUpdate
 */
class ImprovedTerseObjectUpdate extends Packet {
  static id = 15
  static frequency = 2
  static trusted = true
  static compression = false

  static format = new Collection([
    ['regionData', { quantity: 1, parameters: [['regionHandle', 'U64'], ['timeDilation', 'U16']] }],
    ['objectData', { parameters: [['data', 'Variable1'], ['textureEntry', 'Variable2']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U64} [data.regionData.regionHandle] RegionHandle
   * @param {U16} [data.regionData.timeDilation] TimeDilation
   * @param {Variable1} [data.objectData.data] Data
   * @param {Variable2} [data.objectData.textureEntry] TextureEntry
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ImprovedTerseObjectUpdate
