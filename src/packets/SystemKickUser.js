/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SystemKickUser
 */
class SystemKickUser extends Packet {
  static id = 166
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentInfo', { parameters: new Collection([['agent', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentInfo.agent] AgentID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SystemKickUser
