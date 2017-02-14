/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * GroupDataUpdate
 */
class GroupDataUpdate extends Packet {
  static id = 388
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['agentGroupData', { parameters: new Collection([['agent', 'LLUUID'], ['group', 'LLUUID'], ['agentPowers', 'U64'], ['groupTitle', 'Variable1']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentGroupData.agent] AgentID
   * @param {LLUUID} [data.agentGroupData.group] GroupID
   * @param {U64} [data.agentGroupData.agentPowers] AgentPowers
   * @param {Variable1} [data.agentGroupData.groupTitle] GroupTitle
   */
  constructor (data = {}) {
    super(data)
  }
}

export default GroupDataUpdate
