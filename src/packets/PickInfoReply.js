/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * PickInfoReply
 */
class PickInfoReply extends Packet {
  static id = 184
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID']] }],
    ['data', { quantity: 1, parameters: [['pick', 'LLUUID'], ['creator', 'LLUUID'], ['topPick', 'BOOL'], ['parcel', 'LLUUID'], ['name', 'Variable1'], ['desc', 'Variable2'], ['snapshot', 'LLUUID'], ['user', 'Variable1'], ['originalName', 'Variable1'], ['simName', 'Variable1'], ['posGlobal', 'LLVector3d'], ['sortOrder', 'S32'], ['enabled', 'BOOL']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.data.pick] PickID
   * @param {LLUUID} [data.data.creator] CreatorID
   * @param {BOOL} [data.data.topPick] TopPick
   * @param {LLUUID} [data.data.parcel] ParcelID
   * @param {Variable1} [data.data.name] Name
   * @param {Variable2} [data.data.desc] Desc
   * @param {LLUUID} [data.data.snapshot] SnapshotID
   * @param {Variable1} [data.data.user] User
   * @param {Variable1} [data.data.originalName] OriginalName
   * @param {Variable1} [data.data.simName] SimName
   * @param {LLVector3d} [data.data.posGlobal] PosGlobal
   * @param {S32} [data.data.sortOrder] SortOrder
   * @param {BOOL} [data.data.enabled] Enabled
   */
  constructor (data = {}) {
    super(data)
  }
}

export default PickInfoReply
