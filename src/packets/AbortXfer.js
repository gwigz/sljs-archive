/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AbortXfer
 */
class AbortXfer extends Packet {
  static id = 157
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['xfer', { quantity: 1, parameters: new Collection([['id', 'U64'], ['result', 'S32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U64} [data.xfer.id] ID
   * @param {S32} [data.xfer.result] Result
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AbortXfer
