/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ParcelAccessListRequest
 */
class ParcelAccessListRequest extends Packet {
  static id = 215
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['data', { quantity: 1, parameters: [['sequence', 'S32'], ['flags', 'U32'], ['local', 'S32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {S32} [data.data.sequence] SequenceID
   * @param {U32} [data.data.flags] Flags
   * @param {S32} [data.data.local] LocalID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ParcelAccessListRequest
