/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * DeclineFriendship
 */
class DeclineFriendship extends Packet {
  static id = 298
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['transactionBlock', { quantity: 1, parameters: [['transaction', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.transactionBlock.transaction] TransactionID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default DeclineFriendship
