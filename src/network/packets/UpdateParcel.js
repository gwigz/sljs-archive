/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * UpdateParcel Packet
 */
class UpdateParcel extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 221

  /**
   * Packet frequency. This value determines whether the message ID is 8, 16, or
   * 32 bits. There can be unique 254 messages IDs in the "High" or "Medium"
   * frequencies and 32,000 in "Low". A message with a "Fixed" frequency also
   * defines its own ID and is considered to be a signal.
   *
   * @type {number}
   */
  static frequency = 0

  /**
   * If this value is true, the client cannot send this packet as circuits only
   * accept trusted packets from internal connections (to utility servers etc).
   *
   * @type {[type]}
   */
  static trusted = true

  /**
   * States if this packet should use or be using zerocoding, to attempt to
   * compress the sequences of zeros in the message in order to reduce network
   * load.
   *
   * @type {[type]}
   */
  static compression = true

  /**
   * Determines the blocks that are are contained in the message and it's
   * required parameters.
   *
   * @see {@link http://wiki.secondlife.com/wiki/Message_Layout}
   * @type {Collection}
   */
  static format = new Collection([
    ['parcelData', { quantity: 1, parameters: new Collection([['parcel', Types.UUID], ['regionHandle', Types.U64], ['owner', Types.UUID], ['groupOwned', Boolean], ['status', Types.U8], ['name', Types.Variable1], ['description', Types.Variable1], ['musicURL', Types.Variable1], ['regionX', Types.F32], ['regionY', Types.F32], ['actualArea', Types.S32], ['billableArea', Types.S32], ['showDir', Boolean], ['isForSale', Boolean], ['category', Types.U8], ['snapshot', Types.UUID], ['userLocation', Types.Vector3], ['salePrice', Types.S32], ['authorizedBuyer', Types.UUID], ['allowPublish', Boolean], ['maturePublish', Boolean]]) }]
  ])

  /**
   * UpdateParcel constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link UpdateParcel.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {UUID} [data.parcelData.parcel] ParcelID
   * @param {U64} [data.parcelData.regionHandle] RegionHandle
   * @param {UUID} [data.parcelData.owner] OwnerID
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
   * @param {UUID} [data.parcelData.snapshot] SnapshotID
   * @param {Vector3} [data.parcelData.userLocation] UserLocation
   * @param {S32} [data.parcelData.salePrice] SalePrice
   * @param {UUID} [data.parcelData.authorizedBuyer] AuthorizedBuyerID
   * @param {BOOL} [data.parcelData.allowPublish] AllowPublish
   * @param {BOOL} [data.parcelData.maturePublish] MaturePublish
   */
  constructor (data = {}) {
    super(data)
  }
}

export default UpdateParcel
