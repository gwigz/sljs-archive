/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * TransferInventory
 */
class TransferInventory extends Packet {
  static id = 295
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['infoBlock', { quantity: 1, parameters: new Collection([['source', 'LLUUID'], ['dest', 'LLUUID'], ['transaction', 'LLUUID']]) }],
    ['inventoryBlock', { parameters: new Collection([['inventory', 'LLUUID'], ['type', 'S8']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.infoBlock.source] SourceID
   * @param {LLUUID} [data.infoBlock.dest] DestID
   * @param {LLUUID} [data.infoBlock.transaction] TransactionID
   * @param {LLUUID} [data.inventoryBlock.inventory] InventoryID
   * @param {S8} [data.inventoryBlock.type] Type
   */
  constructor (data = {}) {
    super(data)
  }
}

export default TransferInventory
