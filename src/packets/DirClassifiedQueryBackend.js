/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * DirClassifiedQueryBackend
 */
class DirClassifiedQueryBackend extends Packet {
  static id = 40
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID']] }],
    ['queryData', { quantity: 1, parameters: [['query', 'LLUUID'], ['queryText', 'Variable1'], ['queryFlags', 'U32'], ['category', 'U32'], ['estate', 'U32'], ['godlike', 'BOOL'], ['queryStart', 'S32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.queryData.query] QueryID
   * @param {Variable1} [data.queryData.queryText] QueryText
   * @param {U32} [data.queryData.queryFlags] QueryFlags
   * @param {U32} [data.queryData.category] Category
   * @param {U32} [data.queryData.estate] EstateID
   * @param {BOOL} [data.queryData.godlike] Godlike
   * @param {S32} [data.queryData.queryStart] QueryStart
   */
  constructor (data = {}) {
    super(data)
  }
}

export default DirClassifiedQueryBackend
