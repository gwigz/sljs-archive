/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * GroupRoleDataReply
 */
class GroupRoleDataReply extends Packet {
  static id = 372
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID']]) }],
    ['groupData', { quantity: 1, parameters: new Collection([['group', 'LLUUID'], ['request', 'LLUUID'], ['roleCount', 'S32']]) }],
    ['roleData', { parameters: new Collection([['role', 'LLUUID'], ['name', 'Variable1'], ['title', 'Variable1'], ['description', 'Variable1'], ['powers', 'U64'], ['members', 'U32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.groupData.group] GroupID
   * @param {LLUUID} [data.groupData.request] RequestID
   * @param {S32} [data.groupData.roleCount] RoleCount
   * @param {LLUUID} [data.roleData.role] RoleID
   * @param {Variable1} [data.roleData.name] Name
   * @param {Variable1} [data.roleData.title] Title
   * @param {Variable1} [data.roleData.description] Description
   * @param {U64} [data.roleData.powers] Powers
   * @param {U32} [data.roleData.members] Members
   */
  constructor (data = {}) {
    super(data)
  }
}

export default GroupRoleDataReply
