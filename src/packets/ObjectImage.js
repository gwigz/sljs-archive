/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ObjectImage
 */
class ObjectImage extends Packet {
  static id = 96
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['objectData', { parameters: [['objectLocal', 'U32'], ['mediaURL', 'Variable1'], ['textureEntry', 'Variable2']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.objectData.objectLocal] ObjectLocalID
   * @param {Variable1} [data.objectData.mediaURL] MediaURL
   * @param {Variable2} [data.objectData.textureEntry] TextureEntry
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ObjectImage
