/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * ModifyLand Packet
 */
class ModifyLand extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 124

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
  static trusted = false

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
    ['agentData', { quantity: 1, parameters: new Collection([['agent', Types.UUID], ['session', Types.UUID]]) }],
    ['modifyBlock', { quantity: 1, parameters: new Collection([['action', Types.U8], ['brushSize', Types.U8], ['seconds', Types.F32], ['height', Types.F32]]) }],
    ['parcelData', { parameters: new Collection([['local', Types.S32], ['west', Types.F32], ['south', Types.F32], ['east', Types.F32], ['north', Types.F32]]) }],
    ['modifyBlockExtended', { parameters: new Collection([['brushSize', Types.F32]]) }]
  ])

  /**
   * ModifyLand constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link ModifyLand.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U8} [data.modifyBlock.action] Action
   * @param {U8} [data.modifyBlock.brushSize] BrushSize
   * @param {F32} [data.modifyBlock.seconds] Seconds
   * @param {F32} [data.modifyBlock.height] Height
   * @param {S32} [data.parcelData.local] LocalID
   * @param {F32} [data.parcelData.west] West
   * @param {F32} [data.parcelData.south] South
   * @param {F32} [data.parcelData.east] East
   * @param {F32} [data.parcelData.north] North
   * @param {F32} [data.modifyBlockExtended.brushSize] BrushSize
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ModifyLand
