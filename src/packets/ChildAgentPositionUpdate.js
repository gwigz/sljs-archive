/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ChildAgentPositionUpdate
 */
class ChildAgentPositionUpdate extends Packet {
  static id = 27
  static frequency = 2
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['regionHandle', 'U64'], ['viewerCircuitCode', 'U32'], ['agent', 'LLUUID'], ['session', 'LLUUID'], ['agentPos', 'LLVector3'], ['agentVel', 'LLVector3'], ['center', 'LLVector3'], ['size', 'LLVector3'], ['atAxis', 'LLVector3'], ['leftAxis', 'LLVector3'], ['upAxis', 'LLVector3'], ['changedGrid', 'BOOL']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U64} [data.agentData.regionHandle] RegionHandle
   * @param {U32} [data.agentData.viewerCircuitCode] ViewerCircuitCode
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLVector3} [data.agentData.agentPos] AgentPos
   * @param {LLVector3} [data.agentData.agentVel] AgentVel
   * @param {LLVector3} [data.agentData.center] Center
   * @param {LLVector3} [data.agentData.size] Size
   * @param {LLVector3} [data.agentData.atAxis] AtAxis
   * @param {LLVector3} [data.agentData.leftAxis] LeftAxis
   * @param {LLVector3} [data.agentData.upAxis] UpAxis
   * @param {BOOL} [data.agentData.changedGrid] ChangedGrid
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ChildAgentPositionUpdate
