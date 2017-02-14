/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ObjectSpinUpdate
 */
class ObjectSpinUpdate extends Packet {
  static id = 121
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['objectData', { quantity: 1, parameters: new Collection([['object', 'LLUUID'], ['rotation', 'LLQuaternion']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.objectData.object] ObjectID
   * @param {LLQuaternion} [data.objectData.rotation] Rotation
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ObjectSpinUpdate
