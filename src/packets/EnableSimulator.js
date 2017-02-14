/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * EnableSimulator
 */
class EnableSimulator extends Packet {
  static id = 151
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['simulatorInfo', { quantity: 1, parameters: new Collection([['handle', 'U64'], ['ip', 'IPADDR'], ['port', 'IPPORT']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U64} [data.simulatorInfo.handle] Handle
   * @param {IPADDR} [data.simulatorInfo.ip] IP
   * @param {IPPORT} [data.simulatorInfo.port] Port
   */
  constructor (data = {}) {
    super(data)
  }
}

export default EnableSimulator
