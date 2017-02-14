/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AgentMovementComplete
 */
class AgentMovementComplete extends Packet {
  static id = 250
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['data', { quantity: 1, parameters: new Collection([['position', 'LLVector3'], ['lookAt', 'LLVector3'], ['regionHandle', 'U64'], ['timestamp', 'U32']]) }],
    ['simData', { quantity: 1, parameters: new Collection([['channelVersion', 'Variable2']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLVector3} [data.data.position] Position
   * @param {LLVector3} [data.data.lookAt] LookAt
   * @param {U64} [data.data.regionHandle] RegionHandle
   * @param {U32} [data.data.timestamp] Timestamp
   * @param {Variable2} [data.simData.channelVersion] ChannelVersion
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AgentMovementComplete
