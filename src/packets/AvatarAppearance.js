/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AvatarAppearance
 */
class AvatarAppearance extends Packet {
  static id = 158
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['sender', { quantity: 1, parameters: [['id', 'LLUUID'], ['isTrial', 'BOOL']] }],
    ['objectData', { quantity: 1, parameters: [['textureEntry', 'Variable2']] }],
    ['visualParam', { parameters: [['paramValue', 'U8']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.sender.id] ID
   * @param {BOOL} [data.sender.isTrial] IsTrial
   * @param {Variable2} [data.objectData.textureEntry] TextureEntry
   * @param {U8} [data.visualParam.paramValue] ParamValue
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AvatarAppearance
