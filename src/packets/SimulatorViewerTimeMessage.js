/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SimulatorViewerTimeMessage
 */
class SimulatorViewerTimeMessage extends Packet {
  static id = 150
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['timeInfo', { quantity: 1, parameters: [['usecSinceStart', 'U64'], ['secPerDay', 'U32'], ['secPerYear', 'U32'], ['sunDirection', 'LLVector3'], ['sunPhase', 'F32'], ['sunAngVelocity', 'LLVector3']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U64} [data.timeInfo.usecSinceStart] UsecSinceStart
   * @param {U32} [data.timeInfo.secPerDay] SecPerDay
   * @param {U32} [data.timeInfo.secPerYear] SecPerYear
   * @param {LLVector3} [data.timeInfo.sunDirection] SunDirection
   * @param {F32} [data.timeInfo.sunPhase] SunPhase
   * @param {LLVector3} [data.timeInfo.sunAngVelocity] SunAngVelocity
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SimulatorViewerTimeMessage
