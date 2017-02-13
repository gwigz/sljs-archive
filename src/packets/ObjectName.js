/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ObjectName
 */
class ObjectName extends Packet {
  static id = 107
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['objectData', { parameters: [['local', 'U32'], ['name', 'Variable1']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.objectData.local] LocalID
   * @param {Variable1} [data.objectData.name] Name
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ObjectName
