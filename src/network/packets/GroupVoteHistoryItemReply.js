/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * GroupVoteHistoryItemReply Packet
 */
class GroupVoteHistoryItemReply extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 362

  /**
   * Packet frequency. This value determines whether the message ID is 8, 16, or
   * 32 bits. There can be unique 254 messages IDs in the "High" or "Medium"
   * frequencies and 32,000 in "Low". A message with a "Fixed" frequency also
   * defines its own ID and is considered to be a signal.
   *
   * @type {number}
   */
  static frequency = 0

  /**
   * If this value is true, the client cannot send this packet as circuits only
   * accept trusted packets from internal connections (to utility servers etc).
   *
   * @type {[type]}
   */
  static trusted = true

  /**
   * States if this packet should use or be using zerocoding, to attempt to
   * compress the sequences of zeros in the message in order to reduce network
   * load.
   *
   * @type {[type]}
   */
  static compression = true

  /**
   * Determines the blocks that are are contained in the message and it's
   * required parameters.
   *
   * @see {@link http://wiki.secondlife.com/wiki/Message_Layout}
   * @type {Collection}
   */
  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', Types.UUID], ['group', Types.UUID]]) }],
    ['transactionData', { quantity: 1, parameters: new Collection([['transaction', Types.UUID], ['totalNumItems', Types.U32]]) }],
    ['historyItemData', { quantity: 1, parameters: new Collection([['vote', Types.UUID], ['terseDate', Types.Variable1], ['startDateTime', Types.Variable1], ['endDateTime', Types.Variable1], ['voteInitiator', Types.UUID], ['voteType', Types.Variable1], ['voteResult', Types.Variable1], ['majority', Types.F32], ['quorum', Types.S32], ['proposalText', Types.Variable2]]) }],
    ['voteItem', { parameters: new Collection([['candidate', Types.UUID], ['voteCast', Types.Variable1], ['numVotes', Types.S32]]) }]
  ])

  /**
   * GroupVoteHistoryItemReply constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link GroupVoteHistoryItemReply.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.group] GroupID
   * @param {LLUUID} [data.transactionData.transaction] TransactionID
   * @param {U32} [data.transactionData.totalNumItems] TotalNumItems
   * @param {LLUUID} [data.historyItemData.vote] VoteID
   * @param {Variable1} [data.historyItemData.terseDate] TerseDateID
   * @param {Variable1} [data.historyItemData.startDateTime] StartDateTime
   * @param {Variable1} [data.historyItemData.endDateTime] EndDateTime
   * @param {LLUUID} [data.historyItemData.voteInitiator] VoteInitiator
   * @param {Variable1} [data.historyItemData.voteType] VoteType
   * @param {Variable1} [data.historyItemData.voteResult] VoteResult
   * @param {F32} [data.historyItemData.majority] Majority
   * @param {S32} [data.historyItemData.quorum] Quorum
   * @param {Variable2} [data.historyItemData.proposalText] ProposalText
   * @param {LLUUID} [data.voteItem.candidate] CandidateID
   * @param {Variable1} [data.voteItem.voteCast] VoteCast
   * @param {S32} [data.voteItem.numVotes] NumVotes
   */
  constructor (data = {}) {
    super(data)
  }
}

export default GroupVoteHistoryItemReply
