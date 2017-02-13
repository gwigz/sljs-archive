/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RemoveMuteListEntry
 */
class RemoveMuteListEntry extends Packet {
  static id = 264
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['muteData', { quantity: 1, parameters: [['mute', 'LLUUID'], ['muteName', 'Variable1']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.muteData.mute] MuteID
   * @param {Variable1} [data.muteData.muteName] MuteName
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RemoveMuteListEntry
