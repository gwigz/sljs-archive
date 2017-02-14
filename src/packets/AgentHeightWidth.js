/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AgentHeightWidth
 */
class AgentHeightWidth extends Packet {
  static id = 83
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID'], ['circuitCode', 'U32']]) }],
    ['heightWidthBlock', { quantity: 1, parameters: new Collection([['genCounter', 'U32'], ['height', 'U16'], ['width', 'U16']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.agentData.circuitCode] CircuitCode
   * @param {U32} [data.heightWidthBlock.genCounter] GenCounter
   * @param {U16} [data.heightWidthBlock.height] Height
   * @param {U16} [data.heightWidthBlock.width] Width
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AgentHeightWidth
