import { Collection } from '../../utilities'
import Packet from './Packet'

import * as Types from '../types'

/**
 * GroupMembersReply Packet
 */
class GroupMembersReply extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  public static id: number = 367

  /**
   * Packet frequency. This value determines whether the message ID is 8, 16, or
   * 32 bits. There can be unique 254 messages IDs in the "High" or "Medium"
   * frequencies and 32,000 in "Low". A message with a "Fixed" frequency also
   * defines its own ID and is considered to be a signal.
   *
   * @type {number}
   */
  public static frequency: number = 0

  /**
   * If this value is true, the client cannot send this packet as circuits only
   * accept trusted packets from internal connections (to utility servers etc).
   *
   * @type {boolean}
   */
  public static trusted: boolean = true

  /**
   * States if this packet should use or be using zerocoding, to attempt to
   * compress the sequences of zeros in the message in order to reduce network
   * load.
   *
   * @type {boolean}
   */
  public static compression: boolean = true

  /**
   * Determines the blocks that are are contained in the message and it's
   * required parameters.
   *
   * @see {@link http://wiki.secondlife.com/wiki/Message_Layout}
   * @type {Collection}
   */
  public static format: Collection<string, any> = new Collection([
    // tslint:disable-next-line:max-line-length
    ['agentData', { quantity: 1, parameters: new Collection<string, any>([['agent', Types.UUID]]) }],
    // tslint:disable-next-line:max-line-length
    ['groupData', { quantity: 1, parameters: new Collection<string, any>([['group', Types.UUID], ['request', Types.UUID], ['memberCount', Types.S32]]) }],
    // tslint:disable-next-line:max-line-length
    ['memberData', { parameters: new Collection<string, any>([['agent', Types.UUID], ['contribution', Types.S32], ['onlineStatus', Types.Variable1], ['agentPowers', Types.U64], ['title', Types.Variable1], ['isOwner', Types.Boolean]]) }]
  ])

  /**
   * GroupMembersReply constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link GroupMembersReply.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {object|Buffer} [data] Packet block data to be seralized, may be optional
   * @param {string} [data.agentData.agent] AgentID
   * @param {string} [data.groupData.group] GroupID
   * @param {string} [data.groupData.request] RequestID
   * @param {S32} [data.groupData.memberCount] MemberCount
   * @param {string} [data.memberData.agent] AgentID
   * @param {S32} [data.memberData.contribution] Contribution
   * @param {Variable1} [data.memberData.onlineStatus] OnlineStatus
   * @param {U64} [data.memberData.agentPowers] AgentPowers
   * @param {Variable1} [data.memberData.title] Title
   * @param {boolean} [data.memberData.isOwner] IsOwner
   */
  constructor(data = {}) {
    super(data)
  }
}

export default GroupMembersReply
