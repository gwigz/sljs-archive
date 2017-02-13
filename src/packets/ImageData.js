/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ImageData
 */
class ImageData extends Packet {
  static id = 9
  static frequency = 2
  static trusted = true
  static compression = false

  static format = new Collection([
    ['image', { quantity: 1, parameters: [['id', 'LLUUID'], ['codec', 'U8'], ['size', 'U32'], ['packets', 'U16']] }],
    ['imageData', { quantity: 1, parameters: [['data', 'Variable2']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.image.id] ID
   * @param {U8} [data.image.codec] Codec
   * @param {U32} [data.image.size] Size
   * @param {U16} [data.image.packets] Packets
   * @param {Variable2} [data.imageData.data] Data
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ImageData
