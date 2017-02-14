/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * CompleteAgentMovement
 */
class CompleteAgentMovement extends Packet {
  static id = 249
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID'], ['circuitCode', 'U32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.agentData.circuitCode] CircuitCode
   */
  constructor (data = {}) {
    super(data)
  }
}

export default CompleteAgentMovement
