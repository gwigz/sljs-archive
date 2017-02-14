/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * EjectUser
 */
class EjectUser extends Packet {
  static id = 167
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['data', { quantity: 1, parameters: new Collection([['target', 'LLUUID'], ['flags', 'U32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.data.target] TargetID
   * @param {U32} [data.data.flags] Flags
   */
  constructor (data = {}) {
    super(data)
  }
}

export default EjectUser
