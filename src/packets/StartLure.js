/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * StartLure
 */
class StartLure extends Packet {
  static id = 70
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['info', { quantity: 1, parameters: new Collection([['lureType', 'U8'], ['message', 'Variable1']]) }],
    ['targetData', { parameters: new Collection([['target', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U8} [data.info.lureType] LureType
   * @param {Variable1} [data.info.message] Message
   * @param {LLUUID} [data.targetData.target] TargetID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default StartLure
