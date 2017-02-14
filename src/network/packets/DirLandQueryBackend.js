/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * DirLandQueryBackend Packet
 */
class DirLandQueryBackend extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 49

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
    ['agentData', { quantity: 1, parameters: new Collection([['agent', Types.UUID]]) }],
    ['queryData', { quantity: 1, parameters: new Collection([['query', Types.UUID], ['queryFlags', Types.U32], ['searchType', Types.U32], ['price', Types.S32], ['area', Types.S32], ['queryStart', Types.S32], ['estate', Types.U32], ['godlike', Boolean]]) }]
  ])

  /**
   * DirLandQueryBackend constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link DirLandQueryBackend.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.queryData.query] QueryID
   * @param {U32} [data.queryData.queryFlags] QueryFlags
   * @param {U32} [data.queryData.searchType] SearchType
   * @param {S32} [data.queryData.price] Price
   * @param {S32} [data.queryData.area] Area
   * @param {S32} [data.queryData.queryStart] QueryStart
   * @param {U32} [data.queryData.estate] EstateID
   * @param {BOOL} [data.queryData.godlike] Godlike
   */
  constructor (data = {}) {
    super(data)
  }
}

export default DirLandQueryBackend
