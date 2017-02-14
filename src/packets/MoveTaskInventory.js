/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * MoveTaskInventory
 */
class MoveTaskInventory extends Packet {
  static id = 288
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID'], ['folder', 'LLUUID']]) }],
    ['inventoryData', { quantity: 1, parameters: new Collection([['local', 'U32'], ['item', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.agentData.folder] FolderID
   * @param {U32} [data.inventoryData.local] LocalID
   * @param {LLUUID} [data.inventoryData.item] ItemID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default MoveTaskInventory
