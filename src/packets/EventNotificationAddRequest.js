/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * EventNotificationAddRequest
 */
class EventNotificationAddRequest extends Packet {
  static id = 181
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['eventData', { quantity: 1, parameters: new Collection([['event', 'U32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.eventData.event] EventID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default EventNotificationAddRequest
