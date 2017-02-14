/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * PayPriceReply
 */
class PayPriceReply extends Packet {
  static id = 162
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['objectData', { quantity: 1, parameters: new Collection([['object', 'LLUUID'], ['defaultPayPrice', 'S32']]) }],
    ['buttonData', { parameters: new Collection([['payButton', 'S32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.objectData.object] ObjectID
   * @param {S32} [data.objectData.defaultPayPrice] DefaultPayPrice
   * @param {S32} [data.buttonData.payButton] PayButton
   */
  constructor (data = {}) {
    super(data)
  }
}

export default PayPriceReply
