/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * DisableSimulator
 */
class DisableSimulator extends Packet {
  static id = 152
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

export default DisableSimulator
