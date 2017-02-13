/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * TransferInventoryAck
 */
class TransferInventoryAck extends Packet {
  static id = 296
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['infoBlock', { quantity: 1, parameters: [['transaction', 'LLUUID'], ['inventory', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.infoBlock.transaction] TransactionID
   * @param {LLUUID} [data.infoBlock.inventory] InventoryID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default TransferInventoryAck
