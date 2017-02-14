/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SimulatorPresentAtLocation
 */
class SimulatorPresentAtLocation extends Packet {
  static id = 11
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['simulatorPublicHostBlock', { quantity: 1, parameters: new Collection([['port', 'IPPORT'], ['simulatorIP', 'IPADDR'], ['gridX', 'U32'], ['gridY', 'U32']]) }],
    ['neighborBlock', { quantity: 4, parameters: new Collection([['ip', 'IPADDR'], ['port', 'IPPORT']]) }],
    ['simulatorBlock', { quantity: 1, parameters: new Collection([['simName', 'Variable1'], ['simAccess', 'U8'], ['regionFlags', 'U32'], ['region', 'LLUUID'], ['estate', 'U32'], ['parentEstate', 'U32']]) }],
    ['telehubBlock', { parameters: new Collection([['hasTelehub', 'boolean'], ['telehubPos', 'LLVector3']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {IPPORT} [data.simulatorPublicHostBlock.port] Port
   * @param {IPADDR} [data.simulatorPublicHostBlock.simulatorIP] SimulatorIP
   * @param {U32} [data.simulatorPublicHostBlock.gridX] GridX
   * @param {U32} [data.simulatorPublicHostBlock.gridY] GridY
   * @param {IPADDR} [data.neighborBlock.ip] IP
   * @param {IPPORT} [data.neighborBlock.port] Port
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

export default SimulatorPresentAtLocation
