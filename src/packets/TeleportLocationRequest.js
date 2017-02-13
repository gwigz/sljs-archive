/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * TeleportLocationRequest
 */
class TeleportLocationRequest extends Packet {
  static id = 63
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['info', { quantity: 1, parameters: [['regionHandle', 'U64'], ['position', 'LLVector3'], ['lookAt', 'LLVector3']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U64} [data.info.regionHandle] RegionHandle
   * @param {LLVector3} [data.info.position] Position
   * @param {LLVector3} [data.info.lookAt] LookAt
   */
  constructor (data = {}) {
    super(data)
  }
}

export default TeleportLocationRequest
