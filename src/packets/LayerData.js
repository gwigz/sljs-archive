/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * LayerData
 */
class LayerData extends Packet {
  static id = 11
  static frequency = 2
  static trusted = true
  static compression = false

  static format = new Collection([
    ['layer', { quantity: 1, parameters: [['type', 'U8']] }],
    ['layerData', { quantity: 1, parameters: [['data', 'Variable2']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U8} [data.layer.type] Type
   * @param {Variable2} [data.layerData.data] Data
   */
  constructor (data = {}) {
    super(data)
  }
}

export default LayerData
