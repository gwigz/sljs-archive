/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * RoutedMoneyBalanceReply Packet
 */
class RoutedMoneyBalanceReply extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 315

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
    ['targetBlock', { quantity: 1, parameters: new Collection([['targetIP', Types.IP], ['targetPort', Types.Port]]) }],
    ['moneyData', { quantity: 1, parameters: new Collection([['agent', Types.UUID], ['transaction', Types.UUID], ['transactionSuccess', Boolean], ['moneyBalance', Types.S32], ['squareMetersCredit', Types.S32], ['squareMetersCommitted', Types.S32], ['description', Types.Variable1]]) }],
    ['transactionInfo', { quantity: 1, parameters: new Collection([['transactionType', Types.S32], ['source', Types.UUID], ['isSourceGroup', Boolean], ['dest', Types.UUID], ['isDestGroup', Boolean], ['amount', Types.S32], ['itemDescription', Types.Variable1]]) }]
  ])

  /**
   * RoutedMoneyBalanceReply constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link RoutedMoneyBalanceReply.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {IP} [data.targetBlock.targetIP] TargetIP
   * @param {Port} [data.targetBlock.targetPort] TargetPort
   * @param {UUID} [data.moneyData.agent] AgentID
   * @param {UUID} [data.moneyData.transaction] TransactionID
   * @param {BOOL} [data.moneyData.transactionSuccess] TransactionSuccess
   * @param {S32} [data.moneyData.moneyBalance] MoneyBalance
   * @param {S32} [data.moneyData.squareMetersCredit] SquareMetersCredit
   * @param {S32} [data.moneyData.squareMetersCommitted] SquareMetersCommitted
   * @param {Variable1} [data.moneyData.description] Description
   * @param {S32} [data.transactionInfo.transactionType] TransactionType
   * @param {UUID} [data.transactionInfo.source] SourceID
   * @param {BOOL} [data.transactionInfo.isSourceGroup] IsSourceGroup
   * @param {UUID} [data.transactionInfo.dest] DestID
   * @param {BOOL} [data.transactionInfo.isDestGroup] IsDestGroup
   * @param {S32} [data.transactionInfo.amount] Amount
   * @param {Variable1} [data.transactionInfo.itemDescription] ItemDescription
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RoutedMoneyBalanceReply
