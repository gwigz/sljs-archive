/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * BuyObjectInventory
 */
class BuyObjectInventory extends Packet {
  static id = 103
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['data', { quantity: 1, parameters: [['object', 'LLUUID'], ['item', 'LLUUID'], ['folder', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.data.object] ObjectID
   * @param {LLUUID} [data.data.item] ItemID
   * @param {LLUUID} [data.data.folder] FolderID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default BuyObjectInventory
