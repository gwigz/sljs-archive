/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * MapLayerReply
 */
class MapLayerReply extends Packet {
  static id = 406
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['flags', 'U32']] }],
    ['layerData', { parameters: [['left', 'U32'], ['right', 'U32'], ['top', 'U32'], ['bottom', 'U32'], ['image', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {U32} [data.agentData.flags] Flags
   * @param {U32} [data.layerData.left] Left
   * @param {U32} [data.layerData.right] Right
   * @param {U32} [data.layerData.top] Top
   * @param {U32} [data.layerData.bottom] Bottom
   * @param {LLUUID} [data.layerData.image] ImageID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default MapLayerReply
