/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ScriptDialogReply
 */
class ScriptDialogReply extends Packet {
  static id = 191
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['data', { quantity: 1, parameters: [['object', 'LLUUID'], ['chatChannel', 'S32'], ['buttonIndex', 'S32'], ['buttonLabel', 'Variable1']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.data.object] ObjectID
   * @param {S32} [data.data.chatChannel] ChatChannel
   * @param {S32} [data.data.buttonIndex] ButtonIndex
   * @param {Variable1} [data.data.buttonLabel] ButtonLabel
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ScriptDialogReply
