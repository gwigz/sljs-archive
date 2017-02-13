/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AgentUpdate
 */
class AgentUpdate extends Packet {
  static id = 4
  static frequency = 2
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID'], ['bodyRotation', 'LLQuaternion'], ['headRotation', 'LLQuaternion'], ['state', 'U8'], ['cameraCenter', 'LLVector3'], ['cameraAtAxis', 'LLVector3'], ['cameraLeftAxis', 'LLVector3'], ['cameraUpAxis', 'LLVector3'], ['far', 'F32'], ['controlFlags', 'U32'], ['flags', 'U8']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
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
