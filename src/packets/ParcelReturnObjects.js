/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ParcelReturnObjects
 */
class ParcelReturnObjects extends Packet {
  static id = 199
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['parcelData', { quantity: 1, parameters: new Collection([['local', 'S32'], ['returnType', 'U32']]) }],
    ['taskIDs', { parameters: new Collection([['task', 'LLUUID']]) }],
    ['ownerIDs', { parameters: new Collection([['owner', 'LLUUID']]) }]
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

export default ParcelReturnObjects
