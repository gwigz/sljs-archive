/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * TrackAgent
 */
class TrackAgent extends Packet {
  static id = 130
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['targetData', { quantity: 1, parameters: new Collection([['prey', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.targetData.prey] PreyID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default TrackAgent
