/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ScriptDataRequest
 */
class ScriptDataRequest extends Packet {
  static id = 337
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['dataBlock', { parameters: [['hash', 'U64'], ['requestType', 'S8'], ['request', 'Variable2']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U64} [data.dataBlock.hash] Hash
   * @param {S8} [data.dataBlock.requestType] RequestType
   * @param {Variable2} [data.dataBlock.request] Request
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ScriptDataRequest
