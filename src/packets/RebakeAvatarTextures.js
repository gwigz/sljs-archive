/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RebakeAvatarTextures
 */
class RebakeAvatarTextures extends Packet {
  static id = 87
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['textureData', { quantity: 1, parameters: [['texture', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.textureData.texture] TextureID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RebakeAvatarTextures
