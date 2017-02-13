/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * FormFriendship
 */
class FormFriendship extends Packet {
  static id = 299
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentBlock', { quantity: 1, parameters: [['source', 'LLUUID'], ['dest', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentBlock.source] SourceID
   * @param {LLUUID} [data.agentBlock.dest] DestID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default FormFriendship
