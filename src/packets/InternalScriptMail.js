/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * InternalScriptMail
 */
class InternalScriptMail extends Packet {
  static id = 16
  static frequency = 1
  static trusted = true
  static compression = false

  static format = new Collection([
    ['dataBlock', { quantity: 1, parameters: new Collection([['from', 'Variable1'], ['to', 'LLUUID'], ['subject', 'Variable1'], ['body', 'Variable2']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {Variable1} [data.dataBlock.from] From
   * @param {LLUUID} [data.dataBlock.to] To
   * @param {Variable1} [data.dataBlock.subject] Subject
   * @param {Variable2} [data.dataBlock.body] Body
   */
  constructor (data = {}) {
    super(data)
  }
}

export default InternalScriptMail
