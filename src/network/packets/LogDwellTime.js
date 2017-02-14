/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities'

import * as Types from '../types'

/**
 * LogDwellTime Packet
 */
class LogDwellTime extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 18

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
    ['dwellInfo', { quantity: 1, parameters: new Collection([['agent', Types.UUID], ['session', Types.UUID], ['duration', Types.F32], ['simName', Types.Variable1], ['regionX', Types.U32], ['regionY', Types.U32], ['avgAgentsInView', Types.U8], ['avgViewerFPS', Types.U8]]) }]
  ])

  /**
   * LogDwellTime constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link LogDwellTime.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.dwellInfo.agent] AgentID
   * @param {LLUUID} [data.dwellInfo.session] SessionID
   * @param {F32} [data.dwellInfo.duration] Duration
   * @param {Variable1} [data.dwellInfo.simName] SimName
   * @param {U32} [data.dwellInfo.regionX] RegionX
   * @param {U32} [data.dwellInfo.regionY] RegionY
   * @param {U8} [data.dwellInfo.avgAgentsInView] AvgAgentsInView
   * @param {U8} [data.dwellInfo.avgViewerFPS] AvgViewerFPS
   */
  constructor (data = {}) {
    super(data)
  }
}

export default LogDwellTime
