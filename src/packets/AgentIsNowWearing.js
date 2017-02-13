/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AgentIsNowWearing
 */
class AgentIsNowWearing extends Packet {
  static id = 383
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['wearableData', { parameters: [['item', 'LLUUID'], ['wearableType', 'U8']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.wearableData.item] ItemID
   * @param {U8} [data.wearableData.wearableType] WearableType
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AgentIsNowWearing
