/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SubscribeLoad
 */
class SubscribeLoad extends Packet {
  static id = 7
  static frequency = 0
  static trusted = true
  static compression = false

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SubscribeLoad
