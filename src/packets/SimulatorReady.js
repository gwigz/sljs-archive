/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SimulatorReady
 */
class SimulatorReady extends Packet {
  static id = 9
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['simulatorBlock', { quantity: 1, parameters: [['simName', 'Variable1'], ['simAccess', 'U8'], ['regionFlags', 'U32'], ['region', 'LLUUID'], ['estate', 'U32'], ['parentEstate', 'U32']] }],
    ['telehubBlock', { quantity: 1, parameters: [['hasTelehub', 'BOOL'], ['telehubPos', 'LLVector3']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {Variable1} [data.simulatorBlock.simName] SimName
   * @param {U8} [data.simulatorBlock.simAccess] SimAccess
   * @param {U32} [data.simulatorBlock.regionFlags] RegionFlags
   * @param {LLUUID} [data.simulatorBlock.region] RegionID
   * @param {U32} [data.simulatorBlock.estate] EstateID
   * @param {U32} [data.simulatorBlock.parentEstate] ParentEstateID
   * @param {BOOL} [data.telehubBlock.hasTelehub] HasTelehub
   * @param {LLVector3} [data.telehubBlock.telehubPos] TelehubPos
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SimulatorReady
