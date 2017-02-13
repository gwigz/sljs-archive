/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AvatarPickerRequest
 */
class AvatarPickerRequest extends Packet {
  static id = 26
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID'], ['query', 'LLUUID']] }],
    ['data', { quantity: 1, parameters: [['name', 'Variable1']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.agentData.query] QueryID
   * @param {Variable1} [data.data.name] Name
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AvatarPickerRequest
