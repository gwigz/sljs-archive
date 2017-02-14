/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * UpdateParcel
 */
class UpdateParcel extends Packet {
  static id = 221
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['parcelData', { quantity: 1, parameters: new Collection([['parcel', 'LLUUID'], ['regionHandle', 'U64'], ['owner', 'LLUUID'], ['groupOwned', 'boolean'], ['status', 'U8'], ['name', 'Variable1'], ['description', 'Variable1'], ['musicURL', 'Variable1'], ['regionX', 'F32'], ['regionY', 'F32'], ['actualArea', 'S32'], ['billableArea', 'S32'], ['showDir', 'boolean'], ['isForSale', 'boolean'], ['category', 'U8'], ['snapshot', 'LLUUID'], ['userLocation', 'LLVector3'], ['salePrice', 'S32'], ['authorizedBuyer', 'LLUUID'], ['allowPublish', 'boolean'], ['maturePublish', 'boolean']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.parcelData.parcel] ParcelID
   * @param {U64} [data.parcelData.regionHandle] RegionHandle
   * @param {LLUUID} [data.parcelData.owner] OwnerID
   * @param {BOOL} [data.parcelData.groupOwned] GroupOwned
   * @param {U8} [data.parcelData.status] Status
   * @param {Variable1} [data.parcelData.name] Name
   * @param {Variable1} [data.parcelData.description] Description
   * @param {Variable1} [data.parcelData.musicURL] MusicURL
   * @param {F32} [data.parcelData.regionX] RegionX
   * @param {F32} [data.parcelData.regionY] RegionY
   * @param {S32} [data.parcelData.actualArea] ActualArea
   * @param {S32} [data.parcelData.billableArea] BillableArea
   * @param {BOOL} [data.parcelData.showDir] ShowDir
   * @param {BOOL} [data.parcelData.isForSale] IsForSale
   * @param {U8} [data.parcelData.category] Category
   * @param {LLUUID} [data.parcelData.snapshot] SnapshotID
   * @param {LLVector3} [data.parcelData.userLocation] UserLocation
   * @param {S32} [data.parcelData.salePrice] SalePrice
   * @param {LLUUID} [data.parcelData.authorizedBuyer] AuthorizedBuyerID
   * @param {BOOL} [data.parcelData.allowPublish] AllowPublish
   * @param {BOOL} [data.parcelData.maturePublish] MaturePublish
   */
  constructor (data = {}) {
    super(data)
  }
}

export default UpdateParcel
