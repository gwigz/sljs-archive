/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * LogParcelChanges Packet
 */
class LogParcelChanges extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 224

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
    ['regionData', { quantity: 1, parameters: new Collection([['regionHandle', Types.U64]]) }],
    ['parcelData', { parameters: new Collection([['parcel', Types.UUID], ['owner', Types.UUID], ['isOwnerGroup', Boolean], ['actualArea', Types.S32], ['action', Types.S8], ['transaction', Types.UUID]]) }]
  ])

  /**
   * LogParcelChanges constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link LogParcelChanges.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {U64} [data.regionData.regionHandle] RegionHandle
   * @param {LLUUID} [data.parcelData.parcel] ParcelID
   * @param {LLUUID} [data.parcelData.owner] OwnerID
   * @param {BOOL} [data.parcelData.isOwnerGroup] IsOwnerGroup
   * @param {S32} [data.parcelData.actualArea] ActualArea
   * @param {S8} [data.parcelData.action] Action
   * @param {LLUUID} [data.parcelData.transaction] TransactionID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default LogParcelChanges
