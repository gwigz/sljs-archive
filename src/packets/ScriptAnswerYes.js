/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ScriptAnswerYes
 */
class ScriptAnswerYes extends Packet {
  static id = 132
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['data', { quantity: 1, parameters: [['task', 'LLUUID'], ['item', 'LLUUID'], ['questions', 'S32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.data.task] TaskID
   * @param {LLUUID} [data.data.item] ItemID
   * @param {S32} [data.data.questions] Questions
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ScriptAnswerYes
