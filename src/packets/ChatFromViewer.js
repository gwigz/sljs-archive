/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ChatFromViewer
 */
class ChatFromViewer extends Packet {
  static id = 80
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['chatData', { quantity: 1, parameters: [['message', 'Variable2'], ['type', 'U8'], ['channel', 'S32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {Variable2} [data.chatData.message] Message
   * @param {U8} [data.chatData.type] Type
   * @param {S32} [data.chatData.channel] Channel
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ChatFromViewer
