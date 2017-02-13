/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * GroupRoleChanges
 */
class GroupRoleChanges extends Packet {
  static id = 342
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID'], ['group', 'LLUUID']] }],
    ['roleChange', { parameters: [['role', 'LLUUID'], ['member', 'LLUUID'], ['change', 'U32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.agentData.group] GroupID
   * @param {LLUUID} [data.roleChange.role] RoleID
   * @param {LLUUID} [data.roleChange.member] MemberID
   * @param {U32} [data.roleChange.change] Change
   */
  constructor (data = {}) {
    super(data)
  }
}

export default GroupRoleChanges
