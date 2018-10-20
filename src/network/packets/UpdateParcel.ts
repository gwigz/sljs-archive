import { Collection } from '../../utilities'
import Packet from './Packet'

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
  public static id: number = 221

  /**
   * Packet frequency. This value determines whether the message ID is 8, 16, or
   * 32 bits. There can be unique 254 messages IDs in the "High" or "Medium"
   * frequencies and 32,000 in "Low". A message with a "Fixed" frequency also
   * defines its own ID and is considered to be a signal.
   *
   * @type {number}
   */
  public static frequency: number = 0

  /**
   * If this value is true, the client cannot send this packet as circuits only
   * accept trusted packets from internal connections (to utility servers etc).
   *
   * @type {boolean}
   */
  public static trusted: boolean = true

  /**
   * States if this packet should use or be using zerocoding, to attempt to
   * compress the sequences of zeros in the message in order to reduce network
   * load.
   *
   * @type {boolean}
   */
  public static compression: boolean = true

  /**
   * Determines the blocks that are are contained in the message and it's
   * required parameters.
   *
   * @see {@link http://wiki.secondlife.com/wiki/Message_Layout}
   * @type {Collection}
   */
  public static format: Collection<string, any> = new Collection([
    // tslint:disable-next-line:max-line-length
    ['parcelData', { quantity: 1, parameters: new Collection<string, any>([['parcel', Types.UUID], ['regionHandle', Types.U64], ['owner', Types.UUID], ['groupOwned', Types.Boolean], ['status', Types.U8], ['name', Types.Variable1], ['description', Types.Variable1], ['musicURL', Types.Variable1], ['regionX', Types.F32], ['regionY', Types.F32], ['actualArea', Types.S32], ['billableArea', Types.S32], ['showDir', Types.Boolean], ['isForSale', Types.Boolean], ['category', Types.U8], ['snapshot', Types.UUID], ['userLocation', Types.Vector3], ['salePrice', Types.S32], ['authorizedBuyer', Types.UUID], ['allowPublish', Types.Boolean], ['maturePublish', Types.Boolean]]) }]
  ])

  /**
   * UpdateParcel constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link UpdateParcel.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {object|Buffer} [data] Packet block data to be seralized, may be optional
   * @param {string} [data.parcelData.parcel] ParcelID
   * @param {U64} [data.parcelData.regionHandle] RegionHandle
   * @param {string} [data.parcelData.owner] OwnerID
   * @param {boolean} [data.parcelData.groupOwned] GroupOwned
   * @param {U8} [data.parcelData.status] Status
   * @param {Variable1} [data.parcelData.name] Name
   * @param {Variable1} [data.parcelData.description] Description
   * @param {Variable1} [data.parcelData.musicURL] MusicURL
   * @param {F32} [data.parcelData.regionX] RegionX
   * @param {F32} [data.parcelData.regionY] RegionY
   * @param {S32} [data.parcelData.actualArea] ActualArea
   * @param {S32} [data.parcelData.billableArea] BillableArea
   * @param {boolean} [data.parcelData.showDir] ShowDir
   * @param {boolean} [data.parcelData.isForSale] IsForSale
   * @param {U8} [data.parcelData.category] Category
   * @param {string} [data.parcelData.snapshot] SnapshotID
   * @param {Vector3} [data.parcelData.userLocation] UserLocation
   * @param {S32} [data.parcelData.salePrice] SalePrice
   * @param {string} [data.parcelData.authorizedBuyer] AuthorizedBuyerID
   * @param {boolean} [data.parcelData.allowPublish] AllowPublish
   * @param {boolean} [data.parcelData.maturePublish] MaturePublish
   */
  constructor(data = {}) {
    super(data)
  }
}

export default UpdateParcel
