/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AgentAlertMessage
 */
class AgentAlertMessage extends Packet {
  static id = 135
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID']] }],
    ['alertData', { quantity: 1, parameters: [['modal', 'BOOL'], ['message', 'Variable1']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {BOOL} [data.alertData.modal] Modal
   * @param {Variable1} [data.alertData.message] Message
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AgentAlertMessage
