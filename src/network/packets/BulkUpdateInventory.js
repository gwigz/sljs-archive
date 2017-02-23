/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * BulkUpdateInventory Packet
 */
class BulkUpdateInventory extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 281

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
    ['agentData', { quantity: 1, parameters: new Collection([['agent', Types.UUID], ['transaction', Types.UUID]]) }],
    ['folderData', { parameters: new Collection([['folder', Types.UUID], ['parent', Types.UUID], ['type', Types.S8], ['name', Types.Variable1]]) }],
    ['itemData', { parameters: new Collection([['item', Types.UUID], ['callback', Types.U32], ['folder', Types.UUID], ['creator', Types.UUID], ['owner', Types.UUID], ['group', Types.UUID], ['baseMask', Types.U32], ['ownerMask', Types.U32], ['groupMask', Types.U32], ['everyoneMask', Types.U32], ['nextOwnerMask', Types.U32], ['groupOwned', Boolean], ['asset', Types.UUID], ['type', Types.S8], ['invType', Types.S8], ['flags', Types.U32], ['saleType', Types.U8], ['salePrice', Types.S32], ['name', Types.Variable1], ['description', Types.Variable1], ['creationDate', Types.S32], ['crc', Types.U32]]) }]
  ])

  /**
   * BulkUpdateInventory constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link BulkUpdateInventory.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {UUID} [data.agentData.agent] AgentID
   * @param {UUID} [data.agentData.transaction] TransactionID
   * @param {UUID} [data.folderData.folder] FolderID
   * @param {UUID} [data.folderData.parent] ParentID
   * @param {S8} [data.folderData.type] Type
   * @param {Variable1} [data.folderData.name] Name
   * @param {UUID} [data.itemData.item] ItemID
   * @param {U32} [data.itemData.callback] CallbackID
   * @param {UUID} [data.itemData.folder] FolderID
   * @param {UUID} [data.itemData.creator] CreatorID
   * @param {UUID} [data.itemData.owner] OwnerID
   * @param {UUID} [data.itemData.group] GroupID
   * @param {U32} [data.itemData.baseMask] BaseMask
   * @param {U32} [data.itemData.ownerMask] OwnerMask
   * @param {U32} [data.itemData.groupMask] GroupMask
   * @param {U32} [data.itemData.everyoneMask] EveryoneMask
   * @param {U32} [data.itemData.nextOwnerMask] NextOwnerMask
   * @param {BOOL} [data.itemData.groupOwned] GroupOwned
   * @param {UUID} [data.itemData.asset] AssetID
   * @param {S8} [data.itemData.type] Type
   * @param {S8} [data.itemData.invType] InvType
   * @param {U32} [data.itemData.flags] Flags
   * @param {U8} [data.itemData.saleType] SaleType
   * @param {S32} [data.itemData.salePrice] SalePrice
   * @param {Variable1} [data.itemData.name] Name
   * @param {Variable1} [data.itemData.description] Description
   * @param {S32} [data.itemData.creationDate] CreationDate
   * @param {U32} [data.itemData.crc] CRC
   */
  constructor (data = {}) {
    super(data)
  }
}

export default BulkUpdateInventory
