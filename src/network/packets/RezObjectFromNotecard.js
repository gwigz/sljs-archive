/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities'

import * as Types from '../types'

/**
 * RezObjectFromNotecard Packet
 */
class RezObjectFromNotecard extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 294

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
    ['agentData', { quantity: 1, parameters: new Collection([['agent', Types.UUID], ['session', Types.UUID], ['group', Types.UUID]]) }],
    ['rezData', { quantity: 1, parameters: new Collection([['fromTask', Types.UUID], ['bypassRaycast', Types.U8], ['rayStart', Types.Vector3], ['rayEnd', Types.Vector3], ['rayTarget', Types.UUID], ['rayEndIsIntersection', Boolean], ['rezSelected', Boolean], ['removeItem', Boolean], ['itemFlags', Types.U32], ['groupMask', Types.U32], ['everyoneMask', Types.U32], ['nextOwnerMask', Types.U32]]) }],
    ['notecardData', { quantity: 1, parameters: new Collection([['notecardItem', Types.UUID], ['object', Types.UUID]]) }],
    ['inventoryData', { parameters: new Collection([['item', Types.UUID]]) }]
  ])

  /**
   * RezObjectFromNotecard constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link RezObjectFromNotecard.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.agentData.group] GroupID
   * @param {LLUUID} [data.rezData.fromTask] FromTaskID
   * @param {U8} [data.rezData.bypassRaycast] BypassRaycast
   * @param {LLVector3} [data.rezData.rayStart] RayStart
   * @param {LLVector3} [data.rezData.rayEnd] RayEnd
   * @param {LLUUID} [data.rezData.rayTarget] RayTargetID
   * @param {BOOL} [data.rezData.rayEndIsIntersection] RayEndIsIntersection
   * @param {BOOL} [data.rezData.rezSelected] RezSelected
   * @param {BOOL} [data.rezData.removeItem] RemoveItem
   * @param {U32} [data.rezData.itemFlags] ItemFlags
   * @param {U32} [data.rezData.groupMask] GroupMask
   * @param {U32} [data.rezData.everyoneMask] EveryoneMask
   * @param {U32} [data.rezData.nextOwnerMask] NextOwnerMask
   * @param {LLUUID} [data.notecardData.notecardItem] NotecardItemID
   * @param {LLUUID} [data.notecardData.object] ObjectID
   * @param {LLUUID} [data.inventoryData.item] ItemID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RezObjectFromNotecard
