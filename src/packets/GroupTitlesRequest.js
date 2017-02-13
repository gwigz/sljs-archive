/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * GroupTitlesRequest
 */
class GroupTitlesRequest extends Packet {
  static id = 375
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID'], ['group', 'LLUUID'], ['request', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.agentData.group] GroupID
   * @param {LLUUID} [data.agentData.request] RequestID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default GroupTitlesRequest
