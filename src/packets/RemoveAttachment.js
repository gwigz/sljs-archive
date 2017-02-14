/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RemoveAttachment
 */
class RemoveAttachment extends Packet {
  static id = 332
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['attachmentBlock', { quantity: 1, parameters: new Collection([['attachmentPoint', 'U8'], ['item', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U8} [data.attachmentBlock.attachmentPoint] AttachmentPoint
   * @param {LLUUID} [data.attachmentBlock.item] ItemID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RemoveAttachment
