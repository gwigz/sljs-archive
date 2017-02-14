/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RegionHandshakeReply
 */
class RegionHandshakeReply extends Packet {
  static id = 149
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['regionInfo', { quantity: 1, parameters: new Collection([['flags', 'U32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.regionInfo.flags] Flags
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RegionHandshakeReply
