/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * GodUpdateRegionInfo Packet
 */
class GodUpdateRegionInfo extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 143

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
    ['regionInfo', { quantity: 1, parameters: new Collection([['simName', Types.Variable1], ['estate', Types.U32], ['parentEstate', Types.U32], ['regionFlags', Types.U32], ['billableFactor', Types.F32], ['pricePerMeter', Types.S32], ['redirectGridX', Types.S32], ['redirectGridY', Types.S32]]) }]
  ])

  /**
   * GodUpdateRegionInfo constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link GodUpdateRegionInfo.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {UUID} [data.agentData.agent] AgentID
   * @param {UUID} [data.agentData.session] SessionID
   * @param {Variable1} [data.regionInfo.simName] SimName
   * @param {U32} [data.regionInfo.estate] EstateID
   * @param {U32} [data.regionInfo.parentEstate] ParentEstateID
   * @param {U32} [data.regionInfo.regionFlags] RegionFlags
   * @param {F32} [data.regionInfo.billableFactor] BillableFactor
   * @param {S32} [data.regionInfo.pricePerMeter] PricePerMeter
   * @param {S32} [data.regionInfo.redirectGridX] RedirectGridX
   * @param {S32} [data.regionInfo.redirectGridY] RedirectGridY
   */
  constructor (data = {}) {
    super(data)
  }
}

export default GodUpdateRegionInfo
