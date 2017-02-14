/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * GodlikeMessage
 */
class GodlikeMessage extends Packet {
  static id = 259
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID'], ['transaction', 'LLUUID']]) }],
    ['methodData', { quantity: 1, parameters: new Collection([['method', 'Variable1'], ['invoice', 'LLUUID']]) }],
    ['paramList', { parameters: new Collection([['parameter', 'Variable1']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.agentData.transaction] TransactionID
   * @param {Variable1} [data.methodData.method] Method
   * @param {LLUUID} [data.methodData.invoice] Invoice
   * @param {Variable1} [data.paramList.parameter] Parameter
   */
  constructor (data = {}) {
    super(data)
  }
}

export default GodlikeMessage
