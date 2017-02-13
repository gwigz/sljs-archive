/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ImagePacket
 */
class ImagePacket extends Packet {
  static id = 10
  static frequency = 2
  static trusted = true
  static compression = false

  static format = new Collection([
    ['image', { quantity: 1, parameters: [['id', 'LLUUID'], ['packet', 'U16']] }],
    ['imageData', { quantity: 1, parameters: [['data', 'Variable2']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.image.id] ID
   * @param {U16} [data.image.packet] Packet
   * @param {Variable2} [data.imageData.data] Data
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ImagePacket
