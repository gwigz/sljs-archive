/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * RezMultipleAttachmentsFromInv Packet
 */
class RezMultipleAttachmentsFromInv extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 396

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
  static trusted = false

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
    ['agentData', { quantity: 1, parameters: new Collection([['agent', Types.UUID], ['session', Types.UUID]]) }],
    ['headerData', { quantity: 1, parameters: new Collection([['compoundMsg', Types.UUID], ['totalObjects', Types.U8], ['firstDetachAll', Boolean]]) }],
    ['objectData', { parameters: new Collection([['item', Types.UUID], ['owner', Types.UUID], ['attachmentPt', Types.U8], ['itemFlags', Types.U32], ['groupMask', Types.U32], ['everyoneMask', Types.U32], ['nextOwnerMask', Types.U32], ['name', Types.Variable1], ['description', Types.Variable1]]) }]
  ])

  /**
   * RezMultipleAttachmentsFromInv constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link RezMultipleAttachmentsFromInv.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {UUID} [data.agentData.agent] AgentID
   * @param {UUID} [data.agentData.session] SessionID
   * @param {UUID} [data.headerData.compoundMsg] CompoundMsgID
   * @param {U8} [data.headerData.totalObjects] TotalObjects
   * @param {BOOL} [data.headerData.firstDetachAll] FirstDetachAll
   * @param {UUID} [data.objectData.item] ItemID
   * @param {UUID} [data.objectData.owner] OwnerID
   * @param {U8} [data.objectData.attachmentPt] AttachmentPt
   * @param {U32} [data.objectData.itemFlags] ItemFlags
   * @param {U32} [data.objectData.groupMask] GroupMask
   * @param {U32} [data.objectData.everyoneMask] EveryoneMask
   * @param {U32} [data.objectData.nextOwnerMask] NextOwnerMask
   * @param {Variable1} [data.objectData.name] Name
   * @param {Variable1} [data.objectData.description] Description
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RezMultipleAttachmentsFromInv
