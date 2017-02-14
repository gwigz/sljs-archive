/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ParcelDivide
 */
class ParcelDivide extends Packet {
  static id = 211
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['parcelData', { quantity: 1, parameters: new Collection([['west', 'F32'], ['south', 'F32'], ['east', 'F32'], ['north', 'F32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {F32} [data.parcelData.west] West
   * @param {F32} [data.parcelData.south] South
   * @param {F32} [data.parcelData.east] East
   * @param {F32} [data.parcelData.north] North
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ParcelDivide
