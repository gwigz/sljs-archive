/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * PickInfoUpdate
 */
class PickInfoUpdate extends Packet {
  static id = 185
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['data', { quantity: 1, parameters: [['pick', 'LLUUID'], ['creator', 'LLUUID'], ['topPick', 'BOOL'], ['parcel', 'LLUUID'], ['name', 'Variable1'], ['desc', 'Variable2'], ['snapshot', 'LLUUID'], ['posGlobal', 'LLVector3d'], ['sortOrder', 'S32'], ['enabled', 'BOOL']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.data.pick] PickID
   * @param {LLUUID} [data.data.creator] CreatorID
   * @param {BOOL} [data.data.topPick] TopPick
   * @param {LLUUID} [data.data.parcel] ParcelID
   * @param {Variable1} [data.data.name] Name
   * @param {Variable2} [data.data.desc] Desc
   * @param {LLUUID} [data.data.snapshot] SnapshotID
   * @param {LLVector3d} [data.data.posGlobal] PosGlobal
   * @param {S32} [data.data.sortOrder] SortOrder
   * @param {BOOL} [data.data.enabled] Enabled
   */
  constructor (data = {}) {
    super(data)
  }
}

export default PickInfoUpdate
