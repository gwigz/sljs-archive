/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ForceScriptControlRelease
 */
class ForceScriptControlRelease extends Packet {
  static id = 192
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ForceScriptControlRelease
