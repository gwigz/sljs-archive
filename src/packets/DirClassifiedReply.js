/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * DirClassifiedReply
 */
class DirClassifiedReply extends Packet {
  static id = 41
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID']]) }],
    ['queryData', { quantity: 1, parameters: new Collection([['query', 'LLUUID']]) }],
    ['queryReplies', { parameters: new Collection([['classified', 'LLUUID'], ['name', 'Variable1'], ['classifiedFlags', 'U8'], ['creationDate', 'U32'], ['expirationDate', 'U32'], ['priceForListing', 'S32']]) }],
    ['statusData', { parameters: new Collection([['status', 'U32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.queryData.query] QueryID
   * @param {LLUUID} [data.queryReplies.classified] ClassifiedID
   * @param {Variable1} [data.queryReplies.name] Name
   * @param {U8} [data.queryReplies.classifiedFlags] ClassifiedFlags
   * @param {U32} [data.queryReplies.creationDate] CreationDate
   * @param {U32} [data.queryReplies.expirationDate] ExpirationDate
   * @param {S32} [data.queryReplies.priceForListing] PriceForListing
   * @param {U32} [data.statusData.status] Status
   */
  constructor (data = {}) {
    super(data)
  }
}

export default DirClassifiedReply
