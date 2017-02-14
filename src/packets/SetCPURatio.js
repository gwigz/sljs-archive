/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SetCPURatio
 */
class SetCPURatio extends Packet {
  static id = 327
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['data', { quantity: 1, parameters: new Collection([['ratio', 'U8']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U8} [data.data.ratio] Ratio
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SetCPURatio
