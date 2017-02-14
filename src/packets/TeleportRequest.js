/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * TeleportRequest
 */
class TeleportRequest extends Packet {
  static id = 62
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['info', { quantity: 1, parameters: new Collection([['region', 'LLUUID'], ['position', 'LLVector3'], ['lookAt', 'LLVector3']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.info.region] RegionID
   * @param {LLVector3} [data.info.position] Position
   * @param {LLVector3} [data.info.lookAt] LookAt
   */
  constructor (data = {}) {
    super(data)
  }
}

export default TeleportRequest
