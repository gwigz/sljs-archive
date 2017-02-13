/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SetAlwaysRun
 */
class SetAlwaysRun extends Packet {
  static id = 88
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID'], ['alwaysRun', 'BOOL']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {BOOL} [data.agentData.alwaysRun] AlwaysRun
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SetAlwaysRun
