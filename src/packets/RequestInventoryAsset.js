/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RequestInventoryAsset
 */
class RequestInventoryAsset extends Packet {
  static id = 282
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['queryData', { quantity: 1, parameters: new Collection([['query', 'LLUUID'], ['agent', 'LLUUID'], ['owner', 'LLUUID'], ['item', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.queryData.query] QueryID
   * @param {LLUUID} [data.queryData.agent] AgentID
   * @param {LLUUID} [data.queryData.owner] OwnerID
   * @param {LLUUID} [data.queryData.item] ItemID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RequestInventoryAsset
