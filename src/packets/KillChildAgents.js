/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * KillChildAgents
 */
class KillChildAgents extends Packet {
  static id = 242
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['idBlock', { quantity: 1, parameters: new Collection([['agent', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.idBlock.agent] AgentID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default KillChildAgents
