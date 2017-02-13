/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ParcelSelectObjects
 */
class ParcelSelectObjects extends Packet {
  static id = 202
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['parcelData', { quantity: 1, parameters: [['local', 'S32'], ['returnType', 'U32']] }],
    ['returnIDs', { parameters: [['return', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {S32} [data.parcelData.local] LocalID
   * @param {U32} [data.parcelData.returnType] ReturnType
   * @param {LLUUID} [data.returnIDs.return] ReturnID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ParcelSelectObjects
