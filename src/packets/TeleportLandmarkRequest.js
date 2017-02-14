/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * TeleportLandmarkRequest
 */
class TeleportLandmarkRequest extends Packet {
  static id = 65
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['info', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID'], ['landmark', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.info.agent] AgentID
   * @param {LLUUID} [data.info.session] SessionID
   * @param {LLUUID} [data.info.landmark] LandmarkID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default TeleportLandmarkRequest
