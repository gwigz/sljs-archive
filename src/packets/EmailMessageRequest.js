/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * EmailMessageRequest
 */
class EmailMessageRequest extends Packet {
  static id = 335
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['dataBlock', { quantity: 1, parameters: [['object', 'LLUUID'], ['fromAddress', 'Variable1'], ['subject', 'Variable1']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.dataBlock.object] ObjectID
   * @param {Variable1} [data.dataBlock.fromAddress] FromAddress
   * @param {Variable1} [data.dataBlock.subject] Subject
   */
  constructor (data = {}) {
    super(data)
  }
}

export default EmailMessageRequest
