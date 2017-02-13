/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * DirPlacesQuery
 */
class DirPlacesQuery extends Packet {
  static id = 33
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['queryData', { quantity: 1, parameters: [['query', 'LLUUID'], ['queryText', 'Variable1'], ['queryFlags', 'U32'], ['category', 'S8'], ['simName', 'Variable1'], ['queryStart', 'S32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.queryData.query] QueryID
   * @param {Variable1} [data.queryData.queryText] QueryText
   * @param {U32} [data.queryData.queryFlags] QueryFlags
   * @param {S8} [data.queryData.category] Category
   * @param {Variable1} [data.queryData.simName] SimName
   * @param {S32} [data.queryData.queryStart] QueryStart
   */
  constructor (data = {}) {
    super(data)
  }
}

export default DirPlacesQuery
