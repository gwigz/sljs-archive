/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * GrantUserRights
 */
class GrantUserRights extends Packet {
  static id = 320
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['rights', { parameters: new Collection([['agentRelated', 'LLUUID'], ['relatedRights', 'S32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.rights.agentRelated] AgentRelated
   * @param {S32} [data.rights.relatedRights] RelatedRights
   */
  constructor (data = {}) {
    super(data)
  }
}

export default GrantUserRights
