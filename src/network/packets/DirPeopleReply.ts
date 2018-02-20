import Collection from '../../utilities/Collection'
import Packet from './Packet'

import * as Types from '../types'

/**
 * DirPeopleReply Packet
 */
class DirPeopleReply extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  public static id: number = 36

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
    ['agentData', { quantity: 1, parameters: new Collection([['agent', Types.UUID]]) }],
    // tslint:disable-next-line:max-line-length
    ['queryData', { quantity: 1, parameters: new Collection([['query', Types.UUID]]) }],
    // tslint:disable-next-line:max-line-length
    ['queryReplies', { parameters: new Collection([['agent', Types.UUID], ['firstName', Types.Variable1], ['lastName', Types.Variable1], ['group', Types.Variable1], ['online', Boolean], ['reputation', Types.S32]]) }]
  ])

  /**
   * DirPeopleReply constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link DirPeopleReply.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {object|Buffer} [data] Packet block data to be seralized, may be optional
   * @param {UUID} [data.agentData.agent] AgentID
   * @param {UUID} [data.queryData.query] QueryID
   * @param {UUID} [data.queryReplies.agent] AgentID
   * @param {Variable1} [data.queryReplies.firstName] FirstName
   * @param {Variable1} [data.queryReplies.lastName] LastName
   * @param {Variable1} [data.queryReplies.group] Group
   * @param {BOOL} [data.queryReplies.online] Online
   * @param {S32} [data.queryReplies.reputation] Reputation
   */
  constructor (data = {}) {
    super(data)
  }
}

export default DirPeopleReply
