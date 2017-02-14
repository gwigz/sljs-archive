/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AvatarPickerRequestBackend
 */
class AvatarPickerRequestBackend extends Packet {
  static id = 27
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID'], ['query', 'LLUUID'], ['godLevel', 'U8']]) }],
    ['data', { quantity: 1, parameters: new Collection([['name', 'Variable1']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.agentData.query] QueryID
   * @param {U8} [data.agentData.godLevel] GodLevel
   * @param {Variable1} [data.data.name] Name
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AvatarPickerRequestBackend
