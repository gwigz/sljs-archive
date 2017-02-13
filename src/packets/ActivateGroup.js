/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ActivateGroup
 */
class ActivateGroup extends Packet {
  static id = 368
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID'], ['group', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.agentData.group] GroupID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ActivateGroup
