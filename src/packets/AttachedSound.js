/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AttachedSound
 */
class AttachedSound extends Packet {
  static id = 13
  static frequency = 1
  static trusted = true
  static compression = false

  static format = new Collection([
    ['dataBlock', { quantity: 1, parameters: [['sound', 'LLUUID'], ['object', 'LLUUID'], ['owner', 'LLUUID'], ['gain', 'F32'], ['flags', 'U8']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.dataBlock.sound] SoundID
   * @param {LLUUID} [data.dataBlock.object] ObjectID
   * @param {LLUUID} [data.dataBlock.owner] OwnerID
   * @param {F32} [data.dataBlock.gain] Gain
   * @param {U8} [data.dataBlock.flags] Flags
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AttachedSound
