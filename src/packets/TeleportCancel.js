/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * TeleportCancel
 */
class TeleportCancel extends Packet {
  static id = 72
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['info', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.info.agent] AgentID
   * @param {LLUUID} [data.info.session] SessionID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default TeleportCancel
