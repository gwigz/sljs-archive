/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * EjectGroupMemberReply
 */
class EjectGroupMemberReply extends Packet {
  static id = 346
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID']]) }],
    ['groupData', { quantity: 1, parameters: new Collection([['group', 'LLUUID']]) }],
    ['ejectData', { quantity: 1, parameters: new Collection([['success', 'boolean']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.groupData.group] GroupID
   * @param {BOOL} [data.ejectData.success] Success
   */
  constructor (data = {}) {
    super(data)
  }
}

export default EjectGroupMemberReply
