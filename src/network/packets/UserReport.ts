import { Collection } from '../../utilities'
import Packet from './Packet'

import * as Types from '../types'

/**
 * UserReport Packet
 */
class UserReport extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  public static id: number = 133

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
  public static trusted: boolean = false

  /**
   * States if this packet should use or be using zerocoding, to attempt to
   * compress the sequences of zeros in the message in order to reduce network
   * load.
   *
   * @type {boolean}
   */
  public static compression: boolean = true

  /**
   * Determines the blocks that are are contained in the message and it's
   * required parameters.
   *
   * @see {@link http://wiki.secondlife.com/wiki/Message_Layout}
   * @type {Collection}
   */
  public static format: Collection<string, any> = new Collection([
    // tslint:disable-next-line:max-line-length
    ['agentData', { quantity: 1, parameters: new Collection<string, any>([['agent', Types.UUID], ['session', Types.UUID]]) }],
    // tslint:disable-next-line:max-line-length
    ['reportData', { quantity: 1, parameters: new Collection<string, any>([['reportType', Types.U8], ['category', Types.U8], ['position', Types.Vector3], ['checkFlags', Types.U8], ['screenshot', Types.UUID], ['object', Types.UUID], ['abuser', Types.UUID], ['abuseRegionName', Types.Variable1], ['abuseRegion', Types.UUID], ['summary', Types.Variable1], ['details', Types.Variable2], ['versionString', Types.Variable1]]) }]
  ])

  /**
   * UserReport constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link UserReport.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {object|Buffer} [data] Packet block data to be seralized, may be optional
   * @param {string} [data.agentData.agent] AgentID
   * @param {string} [data.agentData.session] SessionID
   * @param {U8} [data.reportData.reportType] ReportType
   * @param {U8} [data.reportData.category] Category
   * @param {Vector3} [data.reportData.position] Position
   * @param {U8} [data.reportData.checkFlags] CheckFlags
   * @param {string} [data.reportData.screenshot] ScreenshotID
   * @param {string} [data.reportData.object] ObjectID
   * @param {string} [data.reportData.abuser] AbuserID
   * @param {Variable1} [data.reportData.abuseRegionName] AbuseRegionName
   * @param {string} [data.reportData.abuseRegion] AbuseRegionID
   * @param {Variable1} [data.reportData.summary] Summary
   * @param {Variable2} [data.reportData.details] Details
   * @param {Variable1} [data.reportData.versionString] VersionString
   */
  constructor (data = {}) {
    super(data)
  }
}

export default UserReport
