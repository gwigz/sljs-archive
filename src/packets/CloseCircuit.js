/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * CloseCircuit
 */
class CloseCircuit extends Packet {
  static id = 4294967293
  static frequency = 3
  static trusted = false
  static compression = false

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   */
  constructor (data = {}) {
    super(data)
  }
}

export default CloseCircuit
