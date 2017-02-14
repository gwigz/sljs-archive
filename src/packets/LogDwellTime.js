/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * LogDwellTime
 */
class LogDwellTime extends Packet {
  static id = 18
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['dwellInfo', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID'], ['duration', 'F32'], ['simName', 'Variable1'], ['regionX', 'U32'], ['regionY', 'U32'], ['avgAgentsInView', 'U8'], ['avgViewerFPS', 'U8']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.dwellInfo.agent] AgentID
   * @param {LLUUID} [data.dwellInfo.session] SessionID
   * @param {F32} [data.dwellInfo.duration] Duration
   * @param {Variable1} [data.dwellInfo.simName] SimName
   * @param {U32} [data.dwellInfo.regionX] RegionX
   * @param {U32} [data.dwellInfo.regionY] RegionY
   * @param {U8} [data.dwellInfo.avgAgentsInView] AvgAgentsInView
   * @param {U8} [data.dwellInfo.avgViewerFPS] AvgViewerFPS
   */
  constructor (data = {}) {
    super(data)
  }
}

export default LogDwellTime
