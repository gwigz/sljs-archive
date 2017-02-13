/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ObjectRotation
 */
class ObjectRotation extends Packet {
  static id = 93
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['objectData', { parameters: [['objectLocal', 'U32'], ['rotation', 'LLQuaternion']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.objectData.objectLocal] ObjectLocalID
   * @param {LLQuaternion} [data.objectData.rotation] Rotation
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ObjectRotation
