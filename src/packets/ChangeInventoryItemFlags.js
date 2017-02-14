/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ChangeInventoryItemFlags
 */
class ChangeInventoryItemFlags extends Packet {
  static id = 271
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['inventoryData', { parameters: new Collection([['item', 'LLUUID'], ['flags', 'U32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.inventoryData.item] ItemID
   * @param {U32} [data.inventoryData.flags] Flags
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ChangeInventoryItemFlags
