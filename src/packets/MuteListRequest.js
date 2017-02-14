/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * MuteListRequest
 */
class MuteListRequest extends Packet {
  static id = 262
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['muteData', { quantity: 1, parameters: new Collection([['muteCRC', 'U32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.muteData.muteCRC] MuteCRC
   */
  constructor (data = {}) {
    super(data)
  }
}

export default MuteListRequest
