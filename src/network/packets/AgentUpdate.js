/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities'

import * as Types from '../types'

/**
 * AgentUpdate Packet
 */
class AgentUpdate extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 4

  /**
   * Packet frequency. This value determines whether the message ID is 8, 16, or
   * 32 bits. There can be unique 254 messages IDs in the "High" or "Medium"
   * frequencies and 32,000 in "Low". A message with a "Fixed" frequency also
   * defines its own ID and is considered to be a signal.
   *
   * @type {number}
   */
  static frequency = 2

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
    ['agentData', { quantity: 1, parameters: new Collection([['agent', Types.UUID], ['session', Types.UUID], ['bodyRotation', Types.LLQuaternion], ['headRotation', Types.LLQuaternion], ['state', Types.U8], ['cameraCenter', Types.Vector3], ['cameraAtAxis', Types.Vector3], ['cameraLeftAxis', Types.Vector3], ['cameraUpAxis', Types.Vector3], ['far', Types.F32], ['controlFlags', Types.U32], ['flags', Types.U8]]) }]
  ])

  /**
   * AgentUpdate constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link AgentUpdate.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLQuaternion} [data.agentData.bodyRotation] BodyRotation
   * @param {LLQuaternion} [data.agentData.headRotation] HeadRotation
   * @param {U8} [data.agentData.state] State
   * @param {LLVector3} [data.agentData.cameraCenter] CameraCenter
   * @param {LLVector3} [data.agentData.cameraAtAxis] CameraAtAxis
   * @param {LLVector3} [data.agentData.cameraLeftAxis] CameraLeftAxis
   * @param {LLVector3} [data.agentData.cameraUpAxis] CameraUpAxis
   * @param {F32} [data.agentData.far] Far
   * @param {U32} [data.agentData.controlFlags] ControlFlags
   * @param {U8} [data.agentData.flags] Flags
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AgentUpdate
