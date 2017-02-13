/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SimulatorSetMap
 */
class SimulatorSetMap extends Packet {
  static id = 6
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['mapData', { quantity: 1, parameters: [['regionHandle', 'U64'], ['type', 'S32'], ['mapImage', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U64} [data.mapData.regionHandle] RegionHandle
   * @param {S32} [data.mapData.type] Type
   * @param {LLUUID} [data.mapData.mapImage] MapImage
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SimulatorSetMap
