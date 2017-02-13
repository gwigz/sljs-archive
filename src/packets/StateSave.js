/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * StateSave
 */
class StateSave extends Packet {
  static id = 127
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['dataBlock', { quantity: 1, parameters: [['filename', 'Variable1']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {Variable1} [data.dataBlock.filename] Filename
   */
  constructor (data = {}) {
    super(data)
  }
}

export default StateSave
