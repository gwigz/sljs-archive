/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ParcelDisableObjects
 */
class ParcelDisableObjects extends Packet {
  static id = 201
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['parcelData', { quantity: 1, parameters: [['local', 'S32'], ['returnType', 'U32']] }],
    ['taskIDs', { parameters: [['task', 'LLUUID']] }],
    ['ownerIDs', { parameters: [['owner', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {S32} [data.parcelData.local] LocalID
   * @param {U32} [data.parcelData.returnType] ReturnType
   * @param {LLUUID} [data.taskIDs.task] TaskID
   * @param {LLUUID} [data.ownerIDs.owner] OwnerID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ParcelDisableObjects
