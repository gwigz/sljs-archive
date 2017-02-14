/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * LandStatRequest
 */
class LandStatRequest extends Packet {
  static id = 421
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['requestData', { quantity: 1, parameters: new Collection([['reportType', 'U32'], ['requestFlags', 'U32'], ['filter', 'Variable1'], ['parcelLocal', 'S32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.requestData.reportType] ReportType
   * @param {U32} [data.requestData.requestFlags] RequestFlags
   * @param {Variable1} [data.requestData.filter] Filter
   * @param {S32} [data.requestData.parcelLocal] ParcelLocalID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default LandStatRequest
