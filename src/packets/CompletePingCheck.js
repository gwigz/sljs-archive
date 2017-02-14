/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * CompletePingCheck
 */
class CompletePingCheck extends Packet {
  static id = 2
  static frequency = 2
  static trusted = false
  static compression = false

  static format = new Collection([
    ['ping', { quantity: 1, parameters: new Collection([['ping', 'U8']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U8} [data.ping.ping] PingID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default CompletePingCheck
