/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RevokePermissions
 */
class RevokePermissions extends Packet {
  static id = 193
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['data', { quantity: 1, parameters: new Collection([['object', 'LLUUID'], ['objectPermissions', 'U32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.data.object] ObjectID
   * @param {U32} [data.data.objectPermissions] ObjectPermissions
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RevokePermissions
