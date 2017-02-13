/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * UseCachedMuteList
 */
class UseCachedMuteList extends Packet {
  static id = 319
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default UseCachedMuteList
