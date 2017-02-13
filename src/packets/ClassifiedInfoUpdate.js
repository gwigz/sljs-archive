/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ClassifiedInfoUpdate
 */
class ClassifiedInfoUpdate extends Packet {
  static id = 45
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['data', { quantity: 1, parameters: [['classified', 'LLUUID'], ['category', 'U32'], ['name', 'Variable1'], ['desc', 'Variable2'], ['parcel', 'LLUUID'], ['parentEstate', 'U32'], ['snapshot', 'LLUUID'], ['posGlobal', 'LLVector3d'], ['classifiedFlags', 'U8'], ['priceForListing', 'S32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.data.classified] ClassifiedID
   * @param {U32} [data.data.category] Category
   * @param {Variable1} [data.data.name] Name
   * @param {Variable2} [data.data.desc] Desc
   * @param {LLUUID} [data.data.parcel] ParcelID
   * @param {U32} [data.data.parentEstate] ParentEstate
   * @param {LLUUID} [data.data.snapshot] SnapshotID
   * @param {LLVector3d} [data.data.posGlobal] PosGlobal
   * @param {U8} [data.data.classifiedFlags] ClassifiedFlags
   * @param {S32} [data.data.priceForListing] PriceForListing
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ClassifiedInfoUpdate
