/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SetScriptRunning
 */
class SetScriptRunning extends Packet {
  static id = 245
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['script', { quantity: 1, parameters: new Collection([['object', 'LLUUID'], ['item', 'LLUUID'], ['running', 'boolean']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.script.object] ObjectID
   * @param {LLUUID} [data.script.item] ItemID
   * @param {BOOL} [data.script.running] Running
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SetScriptRunning
