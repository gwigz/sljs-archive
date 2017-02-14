/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AgentFOV
 */
class AgentFOV extends Packet {
  static id = 82
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID'], ['circuitCode', 'U32']]) }],
    ['fovBlock', { quantity: 1, parameters: new Collection([['genCounter', 'U32'], ['verticalAngle', 'F32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.agentData.circuitCode] CircuitCode
   * @param {U32} [data.fovBlock.genCounter] GenCounter
   * @param {F32} [data.fovBlock.verticalAngle] VerticalAngle
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AgentFOV
