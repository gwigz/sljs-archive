/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ViewerFrozenMessage
 */
class ViewerFrozenMessage extends Packet {
  static id = 137
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['frozenData', { quantity: 1, parameters: new Collection([['data', 'boolean']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {BOOL} [data.frozenData.data] Data
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ViewerFrozenMessage
