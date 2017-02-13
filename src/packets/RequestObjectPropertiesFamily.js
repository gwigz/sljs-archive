/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RequestObjectPropertiesFamily
 */
class RequestObjectPropertiesFamily extends Packet {
  static id = 5
  static frequency = 1
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['objectData', { quantity: 1, parameters: [['requestFlags', 'U32'], ['object', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.objectData.requestFlags] RequestFlags
   * @param {LLUUID} [data.objectData.object] ObjectID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RequestObjectPropertiesFamily
