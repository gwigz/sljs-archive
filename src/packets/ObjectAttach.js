/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ObjectAttach
 */
class ObjectAttach extends Packet {
  static id = 112
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID'], ['attachmentPoint', 'U8']]) }],
    ['objectData', { parameters: new Collection([['objectLocal', 'U32'], ['rotation', 'LLQuaternion']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U8} [data.agentData.attachmentPoint] AttachmentPoint
   * @param {U32} [data.objectData.objectLocal] ObjectLocalID
   * @param {LLQuaternion} [data.objectData.rotation] Rotation
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ObjectAttach
