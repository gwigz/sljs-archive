/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * OpenCircuit
 */
class OpenCircuit extends Packet {
  static id = 4294967292
  static frequency = 3
  static trusted = false
  static compression = false

  static format = new Collection([
    ['circuitInfo', { quantity: 1, parameters: [['ip', 'IPADDR'], ['port', 'IPPORT']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {IPADDR} [data.circuitInfo.ip] IP
   * @param {IPPORT} [data.circuitInfo.port] Port
   */
  constructor (data = {}) {
    super(data)
  }
}

export default OpenCircuit
