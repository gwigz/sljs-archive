/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RequestMultipleObjects
 */
class RequestMultipleObjects extends Packet {
  static id = 3
  static frequency = 1
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['objectData', { parameters: [['cacheMissType', 'U8'], ['id', 'U32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U8} [data.objectData.cacheMissType] CacheMissType
   * @param {U32} [data.objectData.id] ID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RequestMultipleObjects
