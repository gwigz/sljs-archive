/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * GetScriptRunning
 */
class GetScriptRunning extends Packet {
  static id = 243
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['script', { quantity: 1, parameters: [['object', 'LLUUID'], ['item', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.script.object] ObjectID
   * @param {LLUUID} [data.script.item] ItemID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default GetScriptRunning
