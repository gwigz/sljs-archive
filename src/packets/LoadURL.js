/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * LoadURL
 */
class LoadURL extends Packet {
  static id = 194
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['data', { quantity: 1, parameters: [['objectName', 'Variable1'], ['object', 'LLUUID'], ['owner', 'LLUUID'], ['ownerIsGroup', 'BOOL'], ['message', 'Variable1'], ['uRL', 'Variable1']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {Variable1} [data.data.objectName] ObjectName
   * @param {LLUUID} [data.data.object] ObjectID
   * @param {LLUUID} [data.data.owner] OwnerID
   * @param {BOOL} [data.data.ownerIsGroup] OwnerIsGroup
   * @param {Variable1} [data.data.message] Message
   * @param {Variable1} [data.data.uRL] URL
   */
  constructor (data = {}) {
    super(data)
  }
}

export default LoadURL
