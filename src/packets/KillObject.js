/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * KillObject
 */
class KillObject extends Packet {
  static id = 16
  static frequency = 2
  static trusted = true
  static compression = false

  static format = new Collection([
    ['objectData', { parameters: new Collection([['id', 'U32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U32} [data.objectData.id] ID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default KillObject
