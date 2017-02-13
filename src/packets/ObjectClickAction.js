/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ObjectClickAction
 */
class ObjectClickAction extends Packet {
  static id = 95
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['objectData', { parameters: [['objectLocal', 'U32'], ['clickAction', 'U8']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.objectData.objectLocal] ObjectLocalID
   * @param {U8} [data.objectData.clickAction] ClickAction
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ObjectClickAction
