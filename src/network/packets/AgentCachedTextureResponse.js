/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * AgentCachedTextureResponse Packet
 */
class AgentCachedTextureResponse extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 385

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
  static compression = false

  /**
   * Determines the blocks that are are contained in the message and it's
   * required parameters.
   *
   * @see {@link http://wiki.secondlife.com/wiki/Message_Layout}
   * @type {Collection}
   */
  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', Types.UUID], ['session', Types.UUID], ['serialNum', Types.S32]]) }],
    ['wearableData', { parameters: new Collection([['texture', Types.UUID], ['textureIndex', Types.U8], ['hostName', Types.Variable1]]) }]
  ])

  /**
   * AgentCachedTextureResponse constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link AgentCachedTextureResponse.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {UUID} [data.agentData.agent] AgentID
   * @param {UUID} [data.agentData.session] SessionID
   * @param {S32} [data.agentData.serialNum] SerialNum
   * @param {UUID} [data.wearableData.texture] TextureID
   * @param {U8} [data.wearableData.textureIndex] TextureIndex
   * @param {Variable1} [data.wearableData.hostName] HostName
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AgentCachedTextureResponse
