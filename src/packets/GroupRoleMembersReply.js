/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * GroupRoleMembersReply
 */
class GroupRoleMembersReply extends Packet {
  static id = 374
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['group', 'LLUUID'], ['request', 'LLUUID'], ['totalPairs', 'U32']] }],
    ['memberData', { parameters: [['role', 'LLUUID'], ['member', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.group] GroupID
   * @param {LLUUID} [data.agentData.request] RequestID
   * @param {U32} [data.agentData.totalPairs] TotalPairs
   * @param {LLUUID} [data.memberData.role] RoleID
   * @param {LLUUID} [data.memberData.member] MemberID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default GroupRoleMembersReply
