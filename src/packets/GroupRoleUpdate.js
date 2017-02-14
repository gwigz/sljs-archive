/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * GroupRoleUpdate
 */
class GroupRoleUpdate extends Packet {
  static id = 378
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID'], ['group', 'LLUUID']]) }],
    ['roleData', { parameters: new Collection([['role', 'LLUUID'], ['name', 'Variable1'], ['description', 'Variable1'], ['title', 'Variable1'], ['powers', 'U64'], ['updateType', 'U8']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.agentData.group] GroupID
   * @param {LLUUID} [data.roleData.role] RoleID
   * @param {Variable1} [data.roleData.name] Name
   * @param {Variable1} [data.roleData.description] Description
   * @param {Variable1} [data.roleData.title] Title
   * @param {U64} [data.roleData.powers] Powers
   * @param {U8} [data.roleData.updateType] UpdateType
   */
  constructor (data = {}) {
    super(data)
  }
}

export default GroupRoleUpdate
