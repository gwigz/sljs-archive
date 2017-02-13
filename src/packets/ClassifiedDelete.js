/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ClassifiedDelete
 */
class ClassifiedDelete extends Packet {
  static id = 46
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['data', { quantity: 1, parameters: [['classified', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.data.classified] ClassifiedID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ClassifiedDelete
