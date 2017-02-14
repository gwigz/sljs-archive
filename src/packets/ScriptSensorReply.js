/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ScriptSensorReply
 */
class ScriptSensorReply extends Packet {
  static id = 248
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['requester', { quantity: 1, parameters: new Collection([['source', 'LLUUID']]) }],
    ['sensedData', { parameters: new Collection([['object', 'LLUUID'], ['owner', 'LLUUID'], ['group', 'LLUUID'], ['position', 'LLVector3'], ['velocity', 'LLVector3'], ['rotation', 'LLQuaternion'], ['name', 'Variable1'], ['type', 'S32'], ['range', 'F32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.requester.source] SourceID
   * @param {LLUUID} [data.sensedData.object] ObjectID
   * @param {LLUUID} [data.sensedData.owner] OwnerID
   * @param {LLUUID} [data.sensedData.group] GroupID
   * @param {LLVector3} [data.sensedData.position] Position
   * @param {LLVector3} [data.sensedData.velocity] Velocity
   * @param {LLQuaternion} [data.sensedData.rotation] Rotation
   * @param {Variable1} [data.sensedData.name] Name
   * @param {S32} [data.sensedData.type] Type
   * @param {F32} [data.sensedData.range] Range
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ScriptSensorReply
