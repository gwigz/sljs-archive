/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * DetachAttachmentIntoInv
 */
class DetachAttachmentIntoInv extends Packet {
  static id = 397
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['objectData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['item', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.objectData.agent] AgentID
   * @param {LLUUID} [data.objectData.item] ItemID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default DetachAttachmentIntoInv
