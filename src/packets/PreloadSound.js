/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * PreloadSound
 */
class PreloadSound extends Packet {
  static id = 15
  static frequency = 1
  static trusted = true
  static compression = false

  static format = new Collection([
    ['dataBlock', { parameters: new Collection([['object', 'LLUUID'], ['owner', 'LLUUID'], ['sound', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.dataBlock.object] ObjectID
   * @param {LLUUID} [data.dataBlock.owner] OwnerID
   * @param {LLUUID} [data.dataBlock.sound] SoundID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default PreloadSound
