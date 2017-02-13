/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * TeleportStart
 */
class TeleportStart extends Packet {
  static id = 73
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['info', { quantity: 1, parameters: [['teleportFlags', 'U32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U32} [data.info.teleportFlags] TeleportFlags
   */
  constructor (data = {}) {
    super(data)
  }
}

export default TeleportStart
