/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * SendPostcard Packet
 */
class SendPostcard extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 412

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
    ['agentData', { quantity: 1, parameters: new Collection([['agent', Types.UUID], ['session', Types.UUID], ['asset', Types.UUID], ['posGlobal', Types.Vector3d], ['to', Types.Variable1], ['from', Types.Variable1], ['name', Types.Variable1], ['subject', Types.Variable1], ['msg', Types.Variable2], ['allowPublish', Boolean], ['maturePublish', Boolean]]) }]
  ])

  /**
   * SendPostcard constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link SendPostcard.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.agentData.asset] AssetID
   * @param {LLVector3d} [data.agentData.posGlobal] PosGlobal
   * @param {Variable1} [data.agentData.to] To
   * @param {Variable1} [data.agentData.from] From
   * @param {Variable1} [data.agentData.name] Name
   * @param {Variable1} [data.agentData.subject] Subject
   * @param {Variable2} [data.agentData.msg] Msg
   * @param {BOOL} [data.agentData.allowPublish] AllowPublish
   * @param {BOOL} [data.agentData.maturePublish] MaturePublish
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SendPostcard
