/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ParcelMediaCommandMessage
 */
class ParcelMediaCommandMessage extends Packet {
  static id = 419
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['commandBlock', { quantity: 1, parameters: new Collection([['flags', 'U32'], ['command', 'U32'], ['time', 'F32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U32} [data.commandBlock.flags] Flags
   * @param {U32} [data.commandBlock.command] Command
   * @param {F32} [data.commandBlock.time] Time
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ParcelMediaCommandMessage
