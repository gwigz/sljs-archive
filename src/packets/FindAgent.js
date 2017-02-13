/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * FindAgent
 */
class FindAgent extends Packet {
  static id = 256
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentBlock', { quantity: 1, parameters: [['hunter', 'LLUUID'], ['prey', 'LLUUID'], ['spaceIP', 'IPADDR']] }],
    ['locationBlock', { parameters: [['globalX', 'F64'], ['globalY', 'F64']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentBlock.hunter] Hunter
   * @param {LLUUID} [data.agentBlock.prey] Prey
   * @param {IPADDR} [data.agentBlock.spaceIP] SpaceIP
   * @param {F64} [data.locationBlock.globalX] GlobalX
   * @param {F64} [data.locationBlock.globalY] GlobalY
   */
  constructor (data = {}) {
    super(data)
  }
}

export default FindAgent
