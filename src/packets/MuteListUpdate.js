/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * MuteListUpdate
 */
class MuteListUpdate extends Packet {
  static id = 318
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['muteData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['filename', 'Variable1']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.muteData.agent] AgentID
   * @param {Variable1} [data.muteData.filename] Filename
   */
  constructor (data = {}) {
    super(data)
  }
}

export default MuteListUpdate
