/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ViewerStartAuction
 */
class ViewerStartAuction extends Packet {
  static id = 228
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['parcelData', { quantity: 1, parameters: [['local', 'S32'], ['snapshot', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {S32} [data.parcelData.local] LocalID
   * @param {LLUUID} [data.parcelData.snapshot] SnapshotID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ViewerStartAuction
