/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SimWideDeletes
 */
class SimWideDeletes extends Packet {
  static id = 129
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['dataBlock', { quantity: 1, parameters: [['target', 'LLUUID'], ['flags', 'U32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.dataBlock.target] TargetID
   * @param {U32} [data.dataBlock.flags] Flags
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SimWideDeletes
