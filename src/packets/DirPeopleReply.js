/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * DirPeopleReply
 */
class DirPeopleReply extends Packet {
  static id = 36
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID']] }],
    ['queryData', { quantity: 1, parameters: [['query', 'LLUUID']] }],
    ['queryReplies', { parameters: [['agent', 'LLUUID'], ['firstName', 'Variable1'], ['lastName', 'Variable1'], ['group', 'Variable1'], ['online', 'BOOL'], ['reputation', 'S32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.queryData.query] QueryID
   * @param {LLUUID} [data.queryReplies.agent] AgentID
   * @param {Variable1} [data.queryReplies.firstName] FirstName
   * @param {Variable1} [data.queryReplies.lastName] LastName
   * @param {Variable1} [data.queryReplies.group] Group
   * @param {BOOL} [data.queryReplies.online] Online
   * @param {S32} [data.queryReplies.reputation] Reputation
   */
  constructor (data = {}) {
    super(data)
  }
}

export default DirPeopleReply
