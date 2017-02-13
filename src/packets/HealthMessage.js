/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * HealthMessage
 */
class HealthMessage extends Packet {
  static id = 138
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['healthData', { quantity: 1, parameters: [['health', 'F32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {F32} [data.healthData.health] Health
   */
  constructor (data = {}) {
    super(data)
  }
}

export default HealthMessage
