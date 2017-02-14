/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * UpdateMuteListEntry
 */
class UpdateMuteListEntry extends Packet {
  static id = 263
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['muteData', { quantity: 1, parameters: new Collection([['mute', 'LLUUID'], ['muteName', 'Variable1'], ['muteType', 'S32'], ['muteFlags', 'U32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.muteData.mute] MuteID
   * @param {Variable1} [data.muteData.muteName] MuteName
   * @param {S32} [data.muteData.muteType] MuteType
   * @param {U32} [data.muteData.muteFlags] MuteFlags
   */
  constructor (data = {}) {
    super(data)
  }
}

export default UpdateMuteListEntry
