/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * DirClassifiedQuery
 */
class DirClassifiedQuery extends Packet {
  static id = 39
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['queryData', { quantity: 1, parameters: new Collection([['query', 'LLUUID'], ['queryText', 'Variable1'], ['queryFlags', 'U32'], ['category', 'U32'], ['queryStart', 'S32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.queryData.query] QueryID
   * @param {Variable1} [data.queryData.queryText] QueryText
   * @param {U32} [data.queryData.queryFlags] QueryFlags
   * @param {U32} [data.queryData.category] Category
   * @param {S32} [data.queryData.queryStart] QueryStart
   */
  constructor (data = {}) {
    super(data)
  }
}

export default DirClassifiedQuery
