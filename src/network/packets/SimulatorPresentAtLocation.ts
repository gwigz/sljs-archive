import { Collection } from '../../utilities'
import Packet from './Packet'

import * as Types from '../types'

/**
 * SimulatorPresentAtLocation Packet
 */
class SimulatorPresentAtLocation extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  public static id: number = 11

  /**
   * Packet frequency. This value determines whether the message ID is 8, 16, or
   * 32 bits. There can be unique 254 messages IDs in the "High" or "Medium"
   * frequencies and 32,000 in "Low". A message with a "Fixed" frequency also
   * defines its own ID and is considered to be a signal.
   *
   * @type {number}
   */
  public static frequency: number = 0

  /**
   * If this value is true, the client cannot send this packet as circuits only
   * accept trusted packets from internal connections (to utility servers etc).
   *
   * @type {boolean}
   */
  public static trusted: boolean = true

  /**
   * States if this packet should use or be using zerocoding, to attempt to
   * compress the sequences of zeros in the message in order to reduce network
   * load.
   *
   * @type {boolean}
   */
  public static compression: boolean = false

  /**
   * Determines the blocks that are are contained in the message and it's
   * required parameters.
   *
   * @see {@link http://wiki.secondlife.com/wiki/Message_Layout}
   * @type {Collection}
   */
  public static format: Collection<string, any> = new Collection([
    // tslint:disable-next-line:max-line-length
    ['simulatorPublicHostBlock', { quantity: 1, parameters: new Collection<string, any>([['port', Types.Port], ['simulatorIP', Types.IP], ['gridX', Types.U32], ['gridY', Types.U32]]) }],
    // tslint:disable-next-line:max-line-length
    ['neighborBlock', { quantity: 4, parameters: new Collection<string, any>([['ip', Types.IP], ['port', Types.Port]]) }],
    // tslint:disable-next-line:max-line-length
    ['simulatorBlock', { quantity: 1, parameters: new Collection<string, any>([['simName', Types.Variable1], ['simAccess', Types.U8], ['regionFlags', Types.U32], ['region', Types.UUID], ['estate', Types.U32], ['parentEstate', Types.U32]]) }],
    // tslint:disable-next-line:max-line-length
    ['telehubBlock', { parameters: new Collection<string, any>([['hasTelehub', Types.Boolean], ['telehubPos', Types.Vector3]]) }]
  ])

  /**
   * SimulatorPresentAtLocation constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link SimulatorPresentAtLocation.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {object|Buffer} [data] Packet block data to be seralized, may be optional
   * @param {Port} [data.simulatorPublicHostBlock.port] Port
   * @param {IP} [data.simulatorPublicHostBlock.simulatorIP] SimulatorIP
   * @param {U32} [data.simulatorPublicHostBlock.gridX] GridX
   * @param {U32} [data.simulatorPublicHostBlock.gridY] GridY
   * @param {IP} [data.neighborBlock.ip] IP
   * @param {Port} [data.neighborBlock.port] Port
   * @param {Variable1} [data.simulatorBlock.simName] SimName
   * @param {U8} [data.simulatorBlock.simAccess] SimAccess
   * @param {U32} [data.simulatorBlock.regionFlags] RegionFlags
   * @param {string} [data.simulatorBlock.region] RegionID
   * @param {U32} [data.simulatorBlock.estate] EstateID
   * @param {U32} [data.simulatorBlock.parentEstate] ParentEstateID
   * @param {boolean} [data.telehubBlock.hasTelehub] HasTelehub
   * @param {Vector3} [data.telehubBlock.telehubPos] TelehubPos
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SimulatorPresentAtLocation
