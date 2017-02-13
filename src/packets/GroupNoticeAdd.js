/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * GroupNoticeAdd
 */
class GroupNoticeAdd extends Packet {
  static id = 61
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID']] }],
    ['messageBlock', { quantity: 1, parameters: [['toGroup', 'LLUUID'], ['id', 'LLUUID'], ['dialog', 'U8'], ['fromAgentName', 'Variable1'], ['message', 'Variable2'], ['binaryBucket', 'Variable2']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.messageBlock.toGroup] ToGroupID
   * @param {LLUUID} [data.messageBlock.id] ID
   * @param {U8} [data.messageBlock.dialog] Dialog
   * @param {Variable1} [data.messageBlock.fromAgentName] FromAgentName
   * @param {Variable2} [data.messageBlock.message] Message
   * @param {Variable2} [data.messageBlock.binaryBucket] BinaryBucket
   */
  constructor (data = {}) {
    super(data)
  }
}

export default GroupNoticeAdd
