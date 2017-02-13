/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ChildAgentAlive
 */
class ChildAgentAlive extends Packet {
  static id = 26
  static frequency = 2
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['regionHandle', 'U64'], ['viewerCircuitCode', 'U32'], ['agent', 'LLUUID'], ['session', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U64} [data.agentData.regionHandle] RegionHandle
   * @param {U32} [data.agentData.viewerCircuitCode] ViewerCircuitCode
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ChildAgentAlive
