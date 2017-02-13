/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * DirLandQuery
 */
class DirLandQuery extends Packet {
  static id = 48
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['queryData', { quantity: 1, parameters: [['query', 'LLUUID'], ['queryFlags', 'U32'], ['searchType', 'U32'], ['price', 'S32'], ['area', 'S32'], ['queryStart', 'S32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.queryData.query] QueryID
   * @param {U32} [data.queryData.queryFlags] QueryFlags
   * @param {U32} [data.queryData.searchType] SearchType
   * @param {S32} [data.queryData.price] Price
   * @param {S32} [data.queryData.area] Area
   * @param {S32} [data.queryData.queryStart] QueryStart
   */
  constructor (data = {}) {
    super(data)
  }
}

export default DirLandQuery
