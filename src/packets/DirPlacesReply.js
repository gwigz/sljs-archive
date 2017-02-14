/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * DirPlacesReply
 */
class DirPlacesReply extends Packet {
  static id = 35
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID']]) }],
    ['queryData', { parameters: new Collection([['query', 'LLUUID']]) }],
    ['queryReplies', { parameters: new Collection([['parcel', 'LLUUID'], ['name', 'Variable1'], ['forSale', 'boolean'], ['auction', 'boolean'], ['dwell', 'F32']]) }],
    ['statusData', { parameters: new Collection([['status', 'U32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.queryData.query] QueryID
   * @param {LLUUID} [data.queryReplies.parcel] ParcelID
   * @param {Variable1} [data.queryReplies.name] Name
   * @param {BOOL} [data.queryReplies.forSale] ForSale
   * @param {BOOL} [data.queryReplies.auction] Auction
   * @param {F32} [data.queryReplies.dwell] Dwell
   * @param {U32} [data.statusData.status] Status
   */
  constructor (data = {}) {
    super(data)
  }
}

export default DirPlacesReply
