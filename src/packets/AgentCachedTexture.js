/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AgentCachedTexture
 */
class AgentCachedTexture extends Packet {
  static id = 384
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID'], ['serialNum', 'S32']]) }],
    ['wearableData', { parameters: new Collection([['id', 'LLUUID'], ['textureIndex', 'U8']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {S32} [data.agentData.serialNum] SerialNum
   * @param {LLUUID} [data.wearableData.id] ID
   * @param {U8} [data.wearableData.textureIndex] TextureIndex
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AgentCachedTexture
