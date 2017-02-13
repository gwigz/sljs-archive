/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ClassifiedGodDelete
 */
class ClassifiedGodDelete extends Packet {
  static id = 47
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['data', { quantity: 1, parameters: [['classified', 'LLUUID'], ['query', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.data.classified] ClassifiedID
   * @param {LLUUID} [data.data.query] QueryID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ClassifiedGodDelete
