/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * DataHomeLocationRequest
 */
class DataHomeLocationRequest extends Packet {
  static id = 67
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['info', { quantity: 1, parameters: [['agent', 'LLUUID'], ['kickedFromEstate', 'U32']] }],
    ['agentInfo', { quantity: 1, parameters: [['agentEffectiveMaturity', 'U32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.info.agent] AgentID
   * @param {U32} [data.info.kickedFromEstate] KickedFromEstateID
   * @param {U32} [data.agentInfo.agentEffectiveMaturity] AgentEffectiveMaturity
   */
  constructor (data = {}) {
    super(data)
  }
}

export default DataHomeLocationRequest
