/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * LogTextMessage Packet
 */
class LogTextMessage extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 391

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
    ['dataBlock', { parameters: new Collection([['fromAgentId', Types.UUID], ['toAgentId', Types.UUID], ['globalX', Types.F64], ['globalY', Types.F64], ['time', Types.U32], ['message', Types.Variable2]]) }]
  ])

  /**
   * LogTextMessage constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link LogTextMessage.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.dataBlock.fromAgentId] FromAgentId
   * @param {LLUUID} [data.dataBlock.toAgentId] ToAgentId
   * @param {F64} [data.dataBlock.globalX] GlobalX
   * @param {F64} [data.dataBlock.globalY] GlobalY
   * @param {U32} [data.dataBlock.time] Time
   * @param {Variable2} [data.dataBlock.message] Message
   */
  constructor (data = {}) {
    super(data)
  }
}

export default LogTextMessage
