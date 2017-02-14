/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AttachedSoundGainChange
 */
class AttachedSoundGainChange extends Packet {
  static id = 14
  static frequency = 1
  static trusted = true
  static compression = false

  static format = new Collection([
    ['dataBlock', { quantity: 1, parameters: new Collection([['object', 'LLUUID'], ['gain', 'F32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.dataBlock.object] ObjectID
   * @param {F32} [data.dataBlock.gain] Gain
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AttachedSoundGainChange
