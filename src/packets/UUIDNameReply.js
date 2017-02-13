/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * UUIDNameReply
 */
class UUIDNameReply extends Packet {
  static id = 236
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['uUIDNameBlock', { parameters: [['id', 'LLUUID'], ['firstName', 'Variable1'], ['lastName', 'Variable1']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.uUIDNameBlock.id] ID
   * @param {Variable1} [data.uUIDNameBlock.firstName] FirstName
   * @param {Variable1} [data.uUIDNameBlock.lastName] LastName
   */
  constructor (data = {}) {
    super(data)
  }
}

export default UUIDNameReply
