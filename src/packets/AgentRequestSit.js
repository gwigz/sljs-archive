/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AgentRequestSit
 */
class AgentRequestSit extends Packet {
  static id = 6
  static frequency = 2
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['targetObject', { quantity: 1, parameters: new Collection([['target', 'LLUUID'], ['offset', 'LLVector3']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.targetObject.target] TargetID
   * @param {LLVector3} [data.targetObject.offset] Offset
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AgentRequestSit
