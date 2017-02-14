/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * PickDelete
 */
class PickDelete extends Packet {
  static id = 186
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['data', { quantity: 1, parameters: new Collection([['pick', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.data.pick] PickID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default PickDelete
