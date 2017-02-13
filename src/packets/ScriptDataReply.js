/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ScriptDataReply
 */
class ScriptDataReply extends Packet {
  static id = 338
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['dataBlock', { parameters: [['hash', 'U64'], ['reply', 'Variable2']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U64} [data.dataBlock.hash] Hash
   * @param {Variable2} [data.dataBlock.reply] Reply
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ScriptDataReply
