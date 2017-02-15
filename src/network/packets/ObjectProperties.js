/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * ObjectProperties Packet
 */
class ObjectProperties extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 9

  /**
   * Packet frequency. This value determines whether the message ID is 8, 16, or
   * 32 bits. There can be unique 254 messages IDs in the "High" or "Medium"
   * frequencies and 32,000 in "Low". A message with a "Fixed" frequency also
   * defines its own ID and is considered to be a signal.
   *
   * @type {number}
   */
  static frequency = 1

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
    ['objectData', { parameters: new Collection([['object', Types.UUID], ['creator', Types.UUID], ['owner', Types.UUID], ['group', Types.UUID], ['creationDate', Types.U64], ['baseMask', Types.U32], ['ownerMask', Types.U32], ['groupMask', Types.U32], ['everyoneMask', Types.U32], ['nextOwnerMask', Types.U32], ['ownershipCost', Types.S32], ['saleType', Types.U8], ['salePrice', Types.S32], ['aggregatePerms', Types.U8], ['aggregatePermTextures', Types.U8], ['aggregatePermTexturesOwner', Types.U8], ['category', Types.U32], ['inventorySerial', Types.S16], ['item', Types.UUID], ['folder', Types.UUID], ['fromTask', Types.UUID], ['lastOwner', Types.UUID], ['name', Types.Variable1], ['description', Types.Variable1], ['touchName', Types.Variable1], ['sitName', Types.Variable1], ['texture', Types.Variable1]]) }]
  ])

  /**
   * ObjectProperties constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link ObjectProperties.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.objectData.object] ObjectID
   * @param {LLUUID} [data.objectData.creator] CreatorID
   * @param {LLUUID} [data.objectData.owner] OwnerID
   * @param {LLUUID} [data.objectData.group] GroupID
   * @param {U64} [data.objectData.creationDate] CreationDate
   * @param {U32} [data.objectData.baseMask] BaseMask
   * @param {U32} [data.objectData.ownerMask] OwnerMask
   * @param {U32} [data.objectData.groupMask] GroupMask
   * @param {U32} [data.objectData.everyoneMask] EveryoneMask
   * @param {U32} [data.objectData.nextOwnerMask] NextOwnerMask
   * @param {S32} [data.objectData.ownershipCost] OwnershipCost
   * @param {U8} [data.objectData.saleType] SaleType
   * @param {S32} [data.objectData.salePrice] SalePrice
   * @param {U8} [data.objectData.aggregatePerms] AggregatePerms
   * @param {U8} [data.objectData.aggregatePermTextures] AggregatePermTextures
   * @param {U8} [data.objectData.aggregatePermTexturesOwner] AggregatePermTexturesOwner
   * @param {U32} [data.objectData.category] Category
   * @param {S16} [data.objectData.inventorySerial] InventorySerial
   * @param {LLUUID} [data.objectData.item] ItemID
   * @param {LLUUID} [data.objectData.folder] FolderID
   * @param {LLUUID} [data.objectData.fromTask] FromTaskID
   * @param {LLUUID} [data.objectData.lastOwner] LastOwnerID
   * @param {Variable1} [data.objectData.name] Name
   * @param {Variable1} [data.objectData.description] Description
   * @param {Variable1} [data.objectData.touchName] TouchName
   * @param {Variable1} [data.objectData.sitName] SitName
   * @param {Variable1} [data.objectData.texture] TextureID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ObjectProperties
