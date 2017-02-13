/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ImageNotInDatabase
 */
class ImageNotInDatabase extends Packet {
  static id = 86
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['image', { quantity: 1, parameters: [['id', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.image.id] ID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ImageNotInDatabase
