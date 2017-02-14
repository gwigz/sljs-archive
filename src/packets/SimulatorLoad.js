/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SimulatorLoad
 */
class SimulatorLoad extends Packet {
  static id = 12
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['simulatorLoad', { quantity: 1, parameters: new Collection([['timeDilation', 'F32'], ['agentCount', 'S32'], ['canAcceptAgents', 'boolean']]) }],
    ['agentList', { parameters: new Collection([['circuitCode', 'U32'], ['x', 'U8'], ['y', 'U8']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {F32} [data.simulatorLoad.timeDilation] TimeDilation
   * @param {S32} [data.simulatorLoad.agentCount] AgentCount
   * @param {BOOL} [data.simulatorLoad.canAcceptAgents] CanAcceptAgents
   * @param {U32} [data.agentList.circuitCode] CircuitCode
   * @param {U8} [data.agentList.x] X
   * @param {U8} [data.agentList.y] Y
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SimulatorLoad
