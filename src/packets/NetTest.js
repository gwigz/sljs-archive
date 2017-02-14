/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * NetTest
 */
class NetTest extends Packet {
  static id = 326
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['netBlock', { quantity: 1, parameters: new Collection([['port', 'IPPORT']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {IPPORT} [data.netBlock.port] Port
   */
  constructor (data = {}) {
    super(data)
  }
}

export default NetTest
