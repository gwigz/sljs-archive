/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ParcelSetOtherCleanTime
 */
class ParcelSetOtherCleanTime extends Packet {
  static id = 200
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['parcelData', { quantity: 1, parameters: new Collection([['local', 'S32'], ['otherCleanTime', 'S32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {S32} [data.parcelData.local] LocalID
   * @param {S32} [data.parcelData.otherCleanTime] OtherCleanTime
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ParcelSetOtherCleanTime
