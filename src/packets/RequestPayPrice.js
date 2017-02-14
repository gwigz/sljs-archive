/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RequestPayPrice
 */
class RequestPayPrice extends Packet {
  static id = 161
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['objectData', { quantity: 1, parameters: new Collection([['object', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.objectData.object] ObjectID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RequestPayPrice
