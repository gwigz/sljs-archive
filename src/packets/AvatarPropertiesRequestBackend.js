/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AvatarPropertiesRequestBackend
 */
class AvatarPropertiesRequestBackend extends Packet {
  static id = 170
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['avatar', 'LLUUID'], ['godLevel', 'U8'], ['webProfilesDisabled', 'BOOL']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.avatar] AvatarID
   * @param {U8} [data.agentData.godLevel] GodLevel
   * @param {BOOL} [data.agentData.webProfilesDisabled] WebProfilesDisabled
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AvatarPropertiesRequestBackend
