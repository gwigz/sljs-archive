import { Collection } from '../../utilities'
import Packet from './Packet'

import * as Types from '../types'

/**
 * NeighborList Packet
 */
class NeighborList extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  public static id: number = 3

  /**
   * Packet frequency. This value determines whether the message ID is 8, 16, or
   * 32 bits. There can be unique 254 messages IDs in the "High" or "Medium"
   * frequencies and 32,000 in "Low". A message with a "Fixed" frequency also
   * defines its own ID and is considered to be a signal.
   *
   * @type {number}
   */
  public static frequency: number = 2

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
    ['neighborBlock', { quantity: 4, parameters: new Collection<string, any>([['ip', Types.IP], ['port', Types.Port], ['publicIP', Types.IP], ['publicPort', Types.Port], ['region', Types.UUID], ['name', Types.Variable1], ['simAccess', Types.U8]]) }]
  ])

  /**
   * NeighborList constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link NeighborList.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {object|Buffer} [data] Packet block data to be seralized, may be optional
   * @param {IP} [data.neighborBlock.ip] IP
   * @param {Port} [data.neighborBlock.port] Port
   * @param {IP} [data.neighborBlock.publicIP] PublicIP
   * @param {Port} [data.neighborBlock.publicPort] PublicPort
   * @param {string} [data.neighborBlock.region] RegionID
   * @param {Variable1} [data.neighborBlock.name] Name
   * @param {U8} [data.neighborBlock.simAccess] SimAccess
   */
  constructor(data = {}) {
    super(data)
  }
}

export default NeighborList
