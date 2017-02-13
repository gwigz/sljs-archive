/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * DirEventsReply
 */
class DirEventsReply extends Packet {
  static id = 37
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID']] }],
    ['queryData', { quantity: 1, parameters: [['query', 'LLUUID']] }],
    ['queryReplies', { parameters: [['owner', 'LLUUID'], ['name', 'Variable1'], ['event', 'U32'], ['date', 'Variable1'], ['unixTime', 'U32'], ['eventFlags', 'U32']] }],
    ['statusData', { parameters: [['status', 'U32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.queryData.query] QueryID
   * @param {LLUUID} [data.queryReplies.owner] OwnerID
   * @param {Variable1} [data.queryReplies.name] Name
   * @param {U32} [data.queryReplies.event] EventID
   * @param {Variable1} [data.queryReplies.date] Date
   * @param {U32} [data.queryReplies.unixTime] UnixTime
   * @param {U32} [data.queryReplies.eventFlags] EventFlags
   * @param {U32} [data.statusData.status] Status
   */
  constructor (data = {}) {
    super(data)
  }
}

export default DirEventsReply
