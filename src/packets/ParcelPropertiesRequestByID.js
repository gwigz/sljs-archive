/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ParcelPropertiesRequestByID
 */
class ParcelPropertiesRequestByID extends Packet {
  static id = 197
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['parcelData', { quantity: 1, parameters: [['sequence', 'S32'], ['local', 'S32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {S32} [data.parcelData.sequence] SequenceID
   * @param {S32} [data.parcelData.local] LocalID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ParcelPropertiesRequestByID
