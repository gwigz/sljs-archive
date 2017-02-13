/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * JoinGroupReply
 */
class JoinGroupReply extends Packet {
  static id = 344
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID']] }],
    ['groupData', { quantity: 1, parameters: [['group', 'LLUUID'], ['success', 'BOOL']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.groupData.group] GroupID
   * @param {BOOL} [data.groupData.success] Success
   */
  constructor (data = {}) {
    super(data)
  }
}

export default JoinGroupReply
