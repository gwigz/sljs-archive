/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * UUIDGroupNameReply
 */
class UUIDGroupNameReply extends Packet {
  static id = 238
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['uUIDNameBlock', { parameters: [['id', 'LLUUID'], ['groupName', 'Variable1']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.uUIDNameBlock.id] ID
   * @param {Variable1} [data.uUIDNameBlock.groupName] GroupName
   */
  constructor (data = {}) {
    super(data)
  }
}

export default UUIDGroupNameReply
