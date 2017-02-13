/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * EconomyDataRequest
 */
class EconomyDataRequest extends Packet {
  static id = 24
  static frequency = 0
  static trusted = false
  static compression = false

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   */
  constructor (data = {}) {
    super(data)
  }
}

export default EconomyDataRequest
