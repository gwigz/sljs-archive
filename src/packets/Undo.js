/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * Undo
 */
class Undo extends Packet {
  static id = 75
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID'], ['group', 'LLUUID']] }],
    ['objectData', { parameters: [['object', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.agentData.group] GroupID
   * @param {LLUUID} [data.objectData.object] ObjectID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default Undo
