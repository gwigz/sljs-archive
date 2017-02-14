/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * DeRezAck
 */
class DeRezAck extends Packet {
  static id = 292
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['transactionData', { quantity: 1, parameters: new Collection([['transaction', 'LLUUID'], ['success', 'boolean']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.transactionData.transaction] TransactionID
   * @param {BOOL} [data.transactionData.success] Success
   */
  constructor (data = {}) {
    super(data)
  }
}

export default DeRezAck
