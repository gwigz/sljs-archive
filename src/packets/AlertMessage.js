/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AlertMessage
 */
class AlertMessage extends Packet {
  static id = 134
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['alertData', { quantity: 1, parameters: [['message', 'Variable1']] }],
    ['alertInfo', { parameters: [['message', 'Variable1'], ['extraParams', 'Variable1']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {Variable1} [data.alertData.message] Message
   * @param {Variable1} [data.alertInfo.message] Message
   * @param {Variable1} [data.alertInfo.extraParams] ExtraParams
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AlertMessage
