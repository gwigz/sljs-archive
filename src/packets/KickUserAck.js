/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * KickUserAck
 */
class KickUserAck extends Packet {
  static id = 164
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['userInfo', { quantity: 1, parameters: new Collection([['session', 'LLUUID'], ['flags', 'U32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.userInfo.session] SessionID
   * @param {U32} [data.userInfo.flags] Flags
   */
  constructor (data = {}) {
    super(data)
  }
}

export default KickUserAck
