/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AvatarTextureUpdate
 */
class AvatarTextureUpdate extends Packet {
  static id = 4
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['texturesChanged', 'boolean']]) }],
    ['wearableData', { parameters: new Collection([['cache', 'LLUUID'], ['textureIndex', 'U8'], ['hostName', 'Variable1']]) }],
    ['textureData', { parameters: new Collection([['texture', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {BOOL} [data.agentData.texturesChanged] TexturesChanged
   * @param {LLUUID} [data.wearableData.cache] CacheID
   * @param {U8} [data.wearableData.textureIndex] TextureIndex
   * @param {Variable1} [data.wearableData.hostName] HostName
   * @param {LLUUID} [data.textureData.texture] TextureID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AvatarTextureUpdate
