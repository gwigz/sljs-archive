/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * GroupProfileReply Packet
 */
class GroupProfileReply extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 352

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
    ['groupData', { quantity: 1, parameters: new Collection([['group', Types.UUID], ['name', Types.Variable1], ['charter', Types.Variable2], ['showInList', Boolean], ['memberTitle', Types.Variable1], ['powersMask', Types.U64], ['insignia', Types.UUID], ['founder', Types.UUID], ['membershipFee', Types.S32], ['openEnrollment', Boolean], ['money', Types.S32], ['groupMembershipCount', Types.S32], ['groupRolesCount', Types.S32], ['allowPublish', Boolean], ['maturePublish', Boolean], ['ownerRole', Types.UUID]]) }]
  ])

  /**
   * GroupProfileReply constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link GroupProfileReply.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.groupData.group] GroupID
   * @param {Variable1} [data.groupData.name] Name
   * @param {Variable2} [data.groupData.charter] Charter
   * @param {BOOL} [data.groupData.showInList] ShowInList
   * @param {Variable1} [data.groupData.memberTitle] MemberTitle
   * @param {U64} [data.groupData.powersMask] PowersMask
   * @param {LLUUID} [data.groupData.insignia] InsigniaID
   * @param {LLUUID} [data.groupData.founder] FounderID
   * @param {S32} [data.groupData.membershipFee] MembershipFee
   * @param {BOOL} [data.groupData.openEnrollment] OpenEnrollment
   * @param {S32} [data.groupData.money] Money
   * @param {S32} [data.groupData.groupMembershipCount] GroupMembershipCount
   * @param {S32} [data.groupData.groupRolesCount] GroupRolesCount
   * @param {BOOL} [data.groupData.allowPublish] AllowPublish
   * @param {BOOL} [data.groupData.maturePublish] MaturePublish
   * @param {LLUUID} [data.groupData.ownerRole] OwnerRole
   */
  constructor (data = {}) {
    super(data)
  }
}

export default GroupProfileReply
