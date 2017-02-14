/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SaveAssetIntoInventory
 */
class SaveAssetIntoInventory extends Packet {
  static id = 272
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID']]) }],
    ['inventoryData', { quantity: 1, parameters: new Collection([['item', 'LLUUID'], ['newAsset', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.inventoryData.item] ItemID
   * @param {LLUUID} [data.inventoryData.newAsset] NewAssetID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SaveAssetIntoInventory
