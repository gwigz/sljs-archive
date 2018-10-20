import { Collection } from '../../utilities'
import Packet from './Packet'

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
  public static id: number = 294

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
    ['notecardData', { quantity: 1, parameters: new Collection<string, any>([['notecardItem', Types.UUID], ['object', Types.UUID]]) }],
    // tslint:disable-next-line:max-line-length
    ['inventoryData', { parameters: new Collection<string, any>([['item', Types.UUID]]) }]
  ])

  /**
   * RezObjectFromNotecard constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link RezObjectFromNotecard.format}. Note that
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
   * @param {string} [data.notecardData.notecardItem] NotecardItemID
   * @param {string} [data.notecardData.object] ObjectID
   * @param {string} [data.inventoryData.item] ItemID
   */
  constructor(data = {}) {
    super(data)
  }
}

export default RezObjectFromNotecard
