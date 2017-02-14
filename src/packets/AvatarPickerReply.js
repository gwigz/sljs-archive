/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AvatarPickerReply
 */
class AvatarPickerReply extends Packet {
  static id = 28
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['query', 'LLUUID']]) }],
    ['data', { parameters: new Collection([['avatar', 'LLUUID'], ['firstName', 'Variable1'], ['lastName', 'Variable1']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.query] QueryID
   * @param {LLUUID} [data.data.avatar] AvatarID
   * @param {Variable1} [data.data.firstName] FirstName
   * @param {Variable1} [data.data.lastName] LastName
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AvatarPickerReply
