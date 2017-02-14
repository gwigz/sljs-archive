/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * OfferCallingCard
 */
class OfferCallingCard extends Packet {
  static id = 301
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['agentBlock', { quantity: 1, parameters: new Collection([['dest', 'LLUUID'], ['transaction', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.agentBlock.dest] DestID
   * @param {LLUUID} [data.agentBlock.transaction] TransactionID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default OfferCallingCard
