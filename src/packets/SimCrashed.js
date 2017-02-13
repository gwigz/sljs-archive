/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SimCrashed
 */
class SimCrashed extends Packet {
  static id = 328
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['data', { quantity: 1, parameters: [['regionX', 'U32'], ['regionY', 'U32']] }],
    ['users', { parameters: [['agent', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U32} [data.data.regionX] RegionX
   * @param {U32} [data.data.regionY] RegionY
   * @param {LLUUID} [data.users.agent] AgentID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SimCrashed
