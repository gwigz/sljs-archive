/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * PickInfoUpdate Packet
 */
class PickInfoUpdate extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 185

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
  static compression = false

  /**
   * Determines the blocks that are are contained in the message and it's
   * required parameters.
   *
   * @see {@link http://wiki.secondlife.com/wiki/Message_Layout}
   * @type {Collection}
   */
  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', Types.UUID], ['session', Types.UUID]]) }],
    ['data', { quantity: 1, parameters: new Collection([['pick', Types.UUID], ['creator', Types.UUID], ['topPick', Boolean], ['parcel', Types.UUID], ['name', Types.Variable1], ['desc', Types.Variable2], ['snapshot', Types.UUID], ['posGlobal', Types.Vector3D], ['sortOrder', Types.S32], ['enabled', Boolean]]) }]
  ])

  /**
   * PickInfoUpdate constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link PickInfoUpdate.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {UUID} [data.agentData.agent] AgentID
   * @param {UUID} [data.agentData.session] SessionID
   * @param {UUID} [data.data.pick] PickID
   * @param {UUID} [data.data.creator] CreatorID
   * @param {BOOL} [data.data.topPick] TopPick
   * @param {UUID} [data.data.parcel] ParcelID
   * @param {Variable1} [data.data.name] Name
   * @param {Variable2} [data.data.desc] Desc
   * @param {UUID} [data.data.snapshot] SnapshotID
   * @param {Vector3D} [data.data.posGlobal] PosGlobal
   * @param {S32} [data.data.sortOrder] SortOrder
   * @param {BOOL} [data.data.enabled] Enabled
   */
  constructor (data = {}) {
    super(data)
  }
}

export default PickInfoUpdate
