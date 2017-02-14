/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AvatarAnimation
 */
class AvatarAnimation extends Packet {
  static id = 20
  static frequency = 2
  static trusted = true
  static compression = false

  static format = new Collection([
    ['sender', { quantity: 1, parameters: new Collection([['id', 'LLUUID']]) }],
    ['animationList', { parameters: new Collection([['anim', 'LLUUID'], ['animSequence', 'S32']]) }],
    ['animationSourceList', { parameters: new Collection([['object', 'LLUUID']]) }],
    ['physicalAvatarEventList', { parameters: new Collection([['typeData', 'Variable1']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.sender.id] ID
   * @param {LLUUID} [data.animationList.anim] AnimID
   * @param {S32} [data.animationList.animSequence] AnimSequenceID
   * @param {LLUUID} [data.animationSourceList.object] ObjectID
   * @param {Variable1} [data.physicalAvatarEventList.typeData] TypeData
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AvatarAnimation
