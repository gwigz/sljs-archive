/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * GroupAccountSummaryRequest
 */
class GroupAccountSummaryRequest extends Packet {
  static id = 353
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID'], ['group', 'LLUUID']] }],
    ['moneyData', { quantity: 1, parameters: [['request', 'LLUUID'], ['intervalDays', 'S32'], ['currentInterval', 'S32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.agentData.group] GroupID
   * @param {LLUUID} [data.moneyData.request] RequestID
   * @param {S32} [data.moneyData.intervalDays] IntervalDays
   * @param {S32} [data.moneyData.currentInterval] CurrentInterval
   */
  constructor (data = {}) {
    super(data)
  }
}

export default GroupAccountSummaryRequest
