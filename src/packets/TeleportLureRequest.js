/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * TeleportLureRequest
 */
class TeleportLureRequest extends Packet {
  static id = 71
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['info', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID'], ['lure', 'LLUUID'], ['teleportFlags', 'U32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.info.agent] AgentID
   * @param {LLUUID} [data.info.session] SessionID
   * @param {LLUUID} [data.info.lure] LureID
   * @param {U32} [data.info.teleportFlags] TeleportFlags
   */
  constructor (data = {}) {
    super(data)
  }
}

export default TeleportLureRequest
