/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ForceObjectSelect
 */
class ForceObjectSelect extends Packet {
  static id = 205
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['header', { quantity: 1, parameters: [['resetList', 'BOOL']] }],
    ['data', { parameters: [['local', 'U32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {BOOL} [data.header.resetList] ResetList
   * @param {U32} [data.data.local] LocalID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ForceObjectSelect
