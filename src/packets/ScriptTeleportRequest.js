/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ScriptTeleportRequest
 */
class ScriptTeleportRequest extends Packet {
  static id = 195
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['data', { quantity: 1, parameters: new Collection([['objectName', 'Variable1'], ['simName', 'Variable1'], ['simPosition', 'LLVector3'], ['lookAt', 'LLVector3']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {Variable1} [data.data.objectName] ObjectName
   * @param {Variable1} [data.data.simName] SimName
   * @param {LLVector3} [data.data.simPosition] SimPosition
   * @param {LLVector3} [data.data.lookAt] LookAt
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ScriptTeleportRequest
