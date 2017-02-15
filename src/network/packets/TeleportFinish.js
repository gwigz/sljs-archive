/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * TeleportFinish Packet
 */
class TeleportFinish extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 69

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
    ['info', { quantity: 1, parameters: new Collection([['agent', Types.UUID], ['location', Types.U32], ['simIP', Types.IP], ['simPort', Types.Port], ['regionHandle', Types.U64], ['seedCapability', Types.Variable2], ['simAccess', Types.U8], ['teleportFlags', Types.U32]]) }]
  ])

  /**
   * TeleportFinish constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link TeleportFinish.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.info.agent] AgentID
   * @param {U32} [data.info.location] LocationID
   * @param {IPADDR} [data.info.simIP] SimIP
   * @param {IPPORT} [data.info.simPort] SimPort
   * @param {U64} [data.info.regionHandle] RegionHandle
   * @param {Variable2} [data.info.seedCapability] SeedCapability
   * @param {U8} [data.info.simAccess] SimAccess
   * @param {U32} [data.info.teleportFlags] TeleportFlags
   */
  constructor (data = {}) {
    super(data)
  }
}

export default TeleportFinish
