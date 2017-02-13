/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ParcelDwellReply
 */
class ParcelDwellReply extends Packet {
  static id = 219
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID']] }],
    ['data', { quantity: 1, parameters: [['local', 'S32'], ['parcel', 'LLUUID'], ['dwell', 'F32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {S32} [data.data.local] LocalID
   * @param {LLUUID} [data.data.parcel] ParcelID
   * @param {F32} [data.data.dwell] Dwell
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ParcelDwellReply
