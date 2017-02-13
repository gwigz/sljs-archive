/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * MeanCollisionAlert
 */
class MeanCollisionAlert extends Packet {
  static id = 136
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['meanCollision', { parameters: [['victim', 'LLUUID'], ['perp', 'LLUUID'], ['time', 'U32'], ['mag', 'F32'], ['type', 'U8']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.meanCollision.victim] Victim
   * @param {LLUUID} [data.meanCollision.perp] Perp
   * @param {U32} [data.meanCollision.time] Time
   * @param {F32} [data.meanCollision.mag] Mag
   * @param {U8} [data.meanCollision.type] Type
   */
  constructor (data = {}) {
    super(data)
  }
}

export default MeanCollisionAlert
