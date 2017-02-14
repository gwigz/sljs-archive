/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AvatarClassifiedReply
 */
class AvatarClassifiedReply extends Packet {
  static id = 42
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['target', 'LLUUID']]) }],
    ['data', { parameters: new Collection([['classified', 'LLUUID'], ['name', 'Variable1']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.target] TargetID
   * @param {LLUUID} [data.data.classified] ClassifiedID
   * @param {Variable1} [data.data.name] Name
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AvatarClassifiedReply
