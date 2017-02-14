/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * NameValuePair
 */
class NameValuePair extends Packet {
  static id = 329
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['taskData', { quantity: 1, parameters: new Collection([['id', 'LLUUID']]) }],
    ['nameValueData', { parameters: new Collection([['nVPair', 'Variable2']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.taskData.id] ID
   * @param {Variable2} [data.nameValueData.nVPair] NVPair
   */
  constructor (data = {}) {
    super(data)
  }
}

export default NameValuePair
