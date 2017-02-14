/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * EdgeDataPacket
 */
class EdgeDataPacket extends Packet {
  static id = 24
  static frequency = 2
  static trusted = true
  static compression = true

  static format = new Collection([
    ['edgeData', { quantity: 1, parameters: new Collection([['layerType', 'U8'], ['direction', 'U8'], ['layerData', 'Variable2']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U8} [data.edgeData.layerType] LayerType
   * @param {U8} [data.edgeData.direction] Direction
   * @param {Variable2} [data.edgeData.layerData] LayerData
   */
  constructor (data = {}) {
    super(data)
  }
}

export default EdgeDataPacket
