/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SimStatus
 */
class SimStatus extends Packet {
  static id = 12
  static frequency = 1
  static trusted = true
  static compression = false

  static format = new Collection([
    ['simStatus', { quantity: 1, parameters: [['canAcceptAgents', 'BOOL'], ['canAcceptTasks', 'BOOL']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {BOOL} [data.simStatus.canAcceptAgents] CanAcceptAgents
   * @param {BOOL} [data.simStatus.canAcceptTasks] CanAcceptTasks
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SimStatus
