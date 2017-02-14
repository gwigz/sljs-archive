/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AgentThrottle
 */
class AgentThrottle extends Packet {
  static id = 81
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID'], ['circuitCode', 'U32']]) }],
    ['throttle', { quantity: 1, parameters: new Collection([['genCounter', 'U32'], ['throttles', 'Variable1']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.agentData.circuitCode] CircuitCode
   * @param {U32} [data.throttle.genCounter] GenCounter
   * @param {Variable1} [data.throttle.throttles] Throttles
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AgentThrottle
