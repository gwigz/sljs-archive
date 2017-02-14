/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * UUIDGroupNameRequest
 */
class UUIDGroupNameRequest extends Packet {
  static id = 237
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['uUIDNameBlock', { parameters: new Collection([['id', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.uUIDNameBlock.id] ID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default UUIDGroupNameRequest
