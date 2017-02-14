/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ClassifiedInfoReply
 */
class ClassifiedInfoReply extends Packet {
  static id = 44
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID']]) }],
    ['data', { quantity: 1, parameters: new Collection([['classified', 'LLUUID'], ['creator', 'LLUUID'], ['creationDate', 'U32'], ['expirationDate', 'U32'], ['category', 'U32'], ['name', 'Variable1'], ['desc', 'Variable2'], ['parcel', 'LLUUID'], ['parentEstate', 'U32'], ['snapshot', 'LLUUID'], ['simName', 'Variable1'], ['posGlobal', 'LLVector3d'], ['parcelName', 'Variable1'], ['classifiedFlags', 'U8'], ['priceForListing', 'S32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.data.classified] ClassifiedID
   * @param {LLUUID} [data.data.creator] CreatorID
   * @param {U32} [data.data.creationDate] CreationDate
   * @param {U32} [data.data.expirationDate] ExpirationDate
   * @param {U32} [data.data.category] Category
   * @param {Variable1} [data.data.name] Name
   * @param {Variable2} [data.data.desc] Desc
   * @param {LLUUID} [data.data.parcel] ParcelID
   * @param {U32} [data.data.parentEstate] ParentEstate
   * @param {LLUUID} [data.data.snapshot] SnapshotID
   * @param {Variable1} [data.data.simName] SimName
   * @param {LLVector3d} [data.data.posGlobal] PosGlobal
   * @param {Variable1} [data.data.parcelName] ParcelName
   * @param {U8} [data.data.classifiedFlags] ClassifiedFlags
   * @param {S32} [data.data.priceForListing] PriceForListing
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ClassifiedInfoReply
