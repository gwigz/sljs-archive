/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ParcelInfoRequest
 */
class ParcelInfoRequest extends Packet {
  static id = 54
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['data', { quantity: 1, parameters: [['parcel', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.data.parcel] ParcelID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ParcelInfoRequest
