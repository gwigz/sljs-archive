/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * DirLandQueryBackend
 */
class DirLandQueryBackend extends Packet {
  static id = 49
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID']]) }],
    ['queryData', { quantity: 1, parameters: new Collection([['query', 'LLUUID'], ['queryFlags', 'U32'], ['searchType', 'U32'], ['price', 'S32'], ['area', 'S32'], ['queryStart', 'S32'], ['estate', 'U32'], ['godlike', 'boolean']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.queryData.query] QueryID
   * @param {U32} [data.queryData.queryFlags] QueryFlags
   * @param {U32} [data.queryData.searchType] SearchType
   * @param {S32} [data.queryData.price] Price
   * @param {S32} [data.queryData.area] Area
   * @param {S32} [data.queryData.queryStart] QueryStart
   * @param {U32} [data.queryData.estate] EstateID
   * @param {BOOL} [data.queryData.godlike] Godlike
   */
  constructor (data = {}) {
    super(data)
  }
}

export default DirLandQueryBackend
