/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * PlacesQuery
 */
class PlacesQuery extends Packet {
  static id = 29
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID'], ['query', 'LLUUID']] }],
    ['transactionData', { quantity: 1, parameters: [['transaction', 'LLUUID']] }],
    ['queryData', { quantity: 1, parameters: [['queryText', 'Variable1'], ['queryFlags', 'U32'], ['category', 'S8'], ['simName', 'Variable1']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.agentData.query] QueryID
   * @param {LLUUID} [data.transactionData.transaction] TransactionID
   * @param {Variable1} [data.queryData.queryText] QueryText
   * @param {U32} [data.queryData.queryFlags] QueryFlags
   * @param {S8} [data.queryData.category] Category
   * @param {Variable1} [data.queryData.simName] SimName
   */
  constructor (data = {}) {
    super(data)
  }
}

export default PlacesQuery
