/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * LogFailedMoneyTransaction Packet
 */
class LogFailedMoneyTransaction extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 20

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
  static compression = false

  /**
   * Determines the blocks that are are contained in the message and it's
   * required parameters.
   *
   * @see {@link http://wiki.secondlife.com/wiki/Message_Layout}
   * @type {Collection}
   */
  static format = new Collection([
    ['transactionData', { quantity: 1, parameters: new Collection([['transaction', Types.UUID], ['transactionTime', Types.U32], ['transactionType', Types.S32], ['source', Types.UUID], ['dest', Types.UUID], ['flags', Types.U8], ['amount', Types.S32], ['simulatorIP', Types.IP], ['gridX', Types.U32], ['gridY', Types.U32], ['failureType', Types.U8]]) }]
  ])

  /**
   * LogFailedMoneyTransaction constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link LogFailedMoneyTransaction.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {UUID} [data.transactionData.transaction] TransactionID
   * @param {U32} [data.transactionData.transactionTime] TransactionTime
   * @param {S32} [data.transactionData.transactionType] TransactionType
   * @param {UUID} [data.transactionData.source] SourceID
   * @param {UUID} [data.transactionData.dest] DestID
   * @param {U8} [data.transactionData.flags] Flags
   * @param {S32} [data.transactionData.amount] Amount
   * @param {IP} [data.transactionData.simulatorIP] SimulatorIP
   * @param {U32} [data.transactionData.gridX] GridX
   * @param {U32} [data.transactionData.gridY] GridY
   * @param {U8} [data.transactionData.failureType] FailureType
   */
  constructor (data = {}) {
    super(data)
  }
}

export default LogFailedMoneyTransaction
