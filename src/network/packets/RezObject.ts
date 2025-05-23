import { Collection } from '../../utilities'
import Packet from './Packet'

import * as Types from '../types'

/**
 * RezObject Packet
 */
class RezObject extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  public static id: number = 293

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
  public static trusted: boolean = false

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
    ['agentData', { quantity: 1, parameters: new Collection<string, any>([['agent', Types.UUID], ['session', Types.UUID], ['group', Types.UUID]]) }],
    // tslint:disable-next-line:max-line-length
    ['rezData', { quantity: 1, parameters: new Collection<string, any>([['fromTask', Types.UUID], ['bypassRaycast', Types.U8], ['rayStart', Types.Vector3], ['rayEnd', Types.Vector3], ['rayTarget', Types.UUID], ['rayEndIsIntersection', Types.Boolean], ['rezSelected', Types.Boolean], ['removeItem', Types.Boolean], ['itemFlags', Types.U32], ['groupMask', Types.U32], ['everyoneMask', Types.U32], ['nextOwnerMask', Types.U32]]) }],
    // tslint:disable-next-line:max-line-length
    ['inventoryData', { quantity: 1, parameters: new Collection<string, any>([['item', Types.UUID], ['folder', Types.UUID], ['creator', Types.UUID], ['owner', Types.UUID], ['group', Types.UUID], ['baseMask', Types.U32], ['ownerMask', Types.U32], ['groupMask', Types.U32], ['everyoneMask', Types.U32], ['nextOwnerMask', Types.U32], ['groupOwned', Types.Boolean], ['transaction', Types.UUID], ['type', Types.S8], ['invType', Types.S8], ['flags', Types.U32], ['saleType', Types.U8], ['salePrice', Types.S32], ['name', Types.Variable1], ['description', Types.Variable1], ['creationDate', Types.S32], ['crc', Types.U32]]) }]
  ])

  /**
   * RezObject constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link RezObject.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {object|Buffer} [data] Packet block data to be seralized, may be optional
   * @param {string} [data.agentData.agent] AgentID
   * @param {string} [data.agentData.session] SessionID
   * @param {string} [data.agentData.group] GroupID
   * @param {string} [data.rezData.fromTask] FromTaskID
   * @param {U8} [data.rezData.bypassRaycast] BypassRaycast
   * @param {Vector3} [data.rezData.rayStart] RayStart
   * @param {Vector3} [data.rezData.rayEnd] RayEnd
   * @param {string} [data.rezData.rayTarget] RayTargetID
   * @param {boolean} [data.rezData.rayEndIsIntersection] RayEndIsIntersection
   * @param {boolean} [data.rezData.rezSelected] RezSelected
   * @param {boolean} [data.rezData.removeItem] RemoveItem
   * @param {U32} [data.rezData.itemFlags] ItemFlags
   * @param {U32} [data.rezData.groupMask] GroupMask
   * @param {U32} [data.rezData.everyoneMask] EveryoneMask
   * @param {U32} [data.rezData.nextOwnerMask] NextOwnerMask
   * @param {string} [data.inventoryData.item] ItemID
   * @param {string} [data.inventoryData.folder] FolderID
   * @param {string} [data.inventoryData.creator] CreatorID
   * @param {string} [data.inventoryData.owner] OwnerID
   * @param {string} [data.inventoryData.group] GroupID
   * @param {U32} [data.inventoryData.baseMask] BaseMask
   * @param {U32} [data.inventoryData.ownerMask] OwnerMask
   * @param {U32} [data.inventoryData.groupMask] GroupMask
   * @param {U32} [data.inventoryData.everyoneMask] EveryoneMask
   * @param {U32} [data.inventoryData.nextOwnerMask] NextOwnerMask
   * @param {boolean} [data.inventoryData.groupOwned] GroupOwned
   * @param {string} [data.inventoryData.transaction] TransactionID
   * @param {S8} [data.inventoryData.type] Type
   * @param {S8} [data.inventoryData.invType] InvType
   * @param {U32} [data.inventoryData.flags] Flags
   * @param {U8} [data.inventoryData.saleType] SaleType
   * @param {S32} [data.inventoryData.salePrice] SalePrice
   * @param {Variable1} [data.inventoryData.name] Name
   * @param {Variable1} [data.inventoryData.description] Description
   * @param {S32} [data.inventoryData.creationDate] CreationDate
   * @param {U32} [data.inventoryData.crc] CRC
   */
  constructor(data = {}) {
    super(data)
  }
}

export default RezObject
