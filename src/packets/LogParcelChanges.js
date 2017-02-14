/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * LogParcelChanges
 */
class LogParcelChanges extends Packet {
  static id = 224
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID']]) }],
    ['regionData', { quantity: 1, parameters: new Collection([['regionHandle', 'U64']]) }],
    ['parcelData', { parameters: new Collection([['parcel', 'LLUUID'], ['owner', 'LLUUID'], ['isOwnerGroup', 'boolean'], ['actualArea', 'S32'], ['action', 'S8'], ['transaction', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {U64} [data.regionData.regionHandle] RegionHandle
   * @param {LLUUID} [data.parcelData.parcel] ParcelID
   * @param {LLUUID} [data.parcelData.owner] OwnerID
   * @param {BOOL} [data.parcelData.isOwnerGroup] IsOwnerGroup
   * @param {S32} [data.parcelData.actualArea] ActualArea
   * @param {S8} [data.parcelData.action] Action
   * @param {LLUUID} [data.parcelData.transaction] TransactionID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default LogParcelChanges
