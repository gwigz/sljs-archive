/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * ChildAgentUpdate Packet
 */
class ChildAgentUpdate extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 25

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
    ['agentData', { quantity: 1, parameters: new Collection([['regionHandle', Types.U64], ['viewerCircuitCode', Types.U32], ['agent', Types.UUID], ['session', Types.UUID], ['agentPos', Types.Vector3], ['agentVel', Types.Vector3], ['center', Types.Vector3], ['size', Types.Vector3], ['atAxis', Types.Vector3], ['leftAxis', Types.Vector3], ['upAxis', Types.Vector3], ['changedGrid', Boolean], ['far', Types.F32], ['aspect', Types.F32], ['throttles', Types.Variable1], ['locomotionState', Types.U32], ['headRotation', Types.Quaternion], ['bodyRotation', Types.Quaternion], ['controlFlags', Types.U32], ['energyLevel', Types.F32], ['godLevel', Types.U8], ['alwaysRun', Boolean], ['preyAgent', Types.UUID], ['agentAccess', Types.U8], ['agentTextures', Types.Variable2], ['activeGroup', Types.UUID]]) }],
    ['groupData', { parameters: new Collection([['group', Types.UUID], ['groupPowers', Types.U64], ['acceptNotices', Boolean]]) }],
    ['animationData', { parameters: new Collection([['animation', Types.UUID], ['object', Types.UUID]]) }],
    ['granterBlock', { parameters: new Collection([['granter', Types.UUID]]) }],
    ['nVPairData', { parameters: new Collection([['nVPairs', Types.Variable2]]) }],
    ['visualParam', { parameters: new Collection([['paramValue', Types.U8]]) }],
    ['agentAccess', { parameters: new Collection([['agentLegacyAccess', Types.U8], ['agentMaxAccess', Types.U8]]) }],
    ['agentInfo', { parameters: new Collection([['flags', Types.U32]]) }]
  ])

  /**
   * ChildAgentUpdate constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link ChildAgentUpdate.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {U64} [data.agentData.regionHandle] RegionHandle
   * @param {U32} [data.agentData.viewerCircuitCode] ViewerCircuitCode
   * @param {UUID} [data.agentData.agent] AgentID
   * @param {UUID} [data.agentData.session] SessionID
   * @param {Vector3} [data.agentData.agentPos] AgentPos
   * @param {Vector3} [data.agentData.agentVel] AgentVel
   * @param {Vector3} [data.agentData.center] Center
   * @param {Vector3} [data.agentData.size] Size
   * @param {Vector3} [data.agentData.atAxis] AtAxis
   * @param {Vector3} [data.agentData.leftAxis] LeftAxis
   * @param {Vector3} [data.agentData.upAxis] UpAxis
   * @param {BOOL} [data.agentData.changedGrid] ChangedGrid
   * @param {F32} [data.agentData.far] Far
   * @param {F32} [data.agentData.aspect] Aspect
   * @param {Variable1} [data.agentData.throttles] Throttles
   * @param {U32} [data.agentData.locomotionState] LocomotionState
   * @param {Quaternion} [data.agentData.headRotation] HeadRotation
   * @param {Quaternion} [data.agentData.bodyRotation] BodyRotation
   * @param {U32} [data.agentData.controlFlags] ControlFlags
   * @param {F32} [data.agentData.energyLevel] EnergyLevel
   * @param {U8} [data.agentData.godLevel] GodLevel
   * @param {BOOL} [data.agentData.alwaysRun] AlwaysRun
   * @param {UUID} [data.agentData.preyAgent] PreyAgent
   * @param {U8} [data.agentData.agentAccess] AgentAccess
   * @param {Variable2} [data.agentData.agentTextures] AgentTextures
   * @param {UUID} [data.agentData.activeGroup] ActiveGroupID
   * @param {UUID} [data.groupData.group] GroupID
   * @param {U64} [data.groupData.groupPowers] GroupPowers
   * @param {BOOL} [data.groupData.acceptNotices] AcceptNotices
   * @param {UUID} [data.animationData.animation] Animation
   * @param {UUID} [data.animationData.object] ObjectID
   * @param {UUID} [data.granterBlock.granter] GranterID
   * @param {Variable2} [data.nVPairData.nVPairs] NVPairs
   * @param {U8} [data.visualParam.paramValue] ParamValue
   * @param {U8} [data.agentAccess.agentLegacyAccess] AgentLegacyAccess
   * @param {U8} [data.agentAccess.agentMaxAccess] AgentMaxAccess
   * @param {U32} [data.agentInfo.flags] Flags
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ChildAgentUpdate
