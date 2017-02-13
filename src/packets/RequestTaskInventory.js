/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RequestTaskInventory
 */
class RequestTaskInventory extends Packet {
  static id = 289
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['inventoryData', { quantity: 1, parameters: [['local', 'U32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.inventoryData.local] LocalID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RequestTaskInventory
