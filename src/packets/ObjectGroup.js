/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ObjectGroup
 */
class ObjectGroup extends Packet {
  static id = 101
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID'], ['group', 'LLUUID']]) }],
    ['objectData', { parameters: new Collection([['objectLocal', 'U32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.agentData.group] GroupID
   * @param {U32} [data.objectData.objectLocal] ObjectLocalID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ObjectGroup
