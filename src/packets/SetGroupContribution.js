/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SetGroupContribution
 */
class SetGroupContribution extends Packet {
  static id = 369
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['data', { quantity: 1, parameters: new Collection([['group', 'LLUUID'], ['contribution', 'S32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.data.group] GroupID
   * @param {S32} [data.data.contribution] Contribution
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SetGroupContribution
