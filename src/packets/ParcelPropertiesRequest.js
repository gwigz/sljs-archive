/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ParcelPropertiesRequest
 */
class ParcelPropertiesRequest extends Packet {
  static id = 11
  static frequency = 1
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['parcelData', { quantity: 1, parameters: [['sequence', 'S32'], ['west', 'F32'], ['south', 'F32'], ['east', 'F32'], ['north', 'F32'], ['snapSelection', 'BOOL']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {S32} [data.parcelData.sequence] SequenceID
   * @param {F32} [data.parcelData.west] West
   * @param {F32} [data.parcelData.south] South
   * @param {F32} [data.parcelData.east] East
   * @param {F32} [data.parcelData.north] North
   * @param {BOOL} [data.parcelData.snapSelection] SnapSelection
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ParcelPropertiesRequest
