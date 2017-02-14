/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * FetchInventory
 */
class FetchInventory extends Packet {
  static id = 279
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['inventoryData', { parameters: new Collection([['owner', 'LLUUID'], ['item', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.inventoryData.owner] OwnerID
   * @param {LLUUID} [data.inventoryData.item] ItemID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default FetchInventory
