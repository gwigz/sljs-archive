/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * LiveHelpGroupRequest
 */
class LiveHelpGroupRequest extends Packet {
  static id = 379
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['requestData', { quantity: 1, parameters: new Collection([['request', 'LLUUID'], ['agent', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.requestData.request] RequestID
   * @param {LLUUID} [data.requestData.agent] AgentID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default LiveHelpGroupRequest
