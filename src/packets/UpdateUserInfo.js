/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * UpdateUserInfo
 */
class UpdateUserInfo extends Packet {
  static id = 401
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['userData', { quantity: 1, parameters: new Collection([['imViaEmail', 'boolean'], ['directoryVisibility', 'Variable1']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {BOOL} [data.userData.imViaEMail] IMViaEMail
   * @param {Variable1} [data.userData.directoryVisibility] DirectoryVisibility
   */
  constructor (data = {}) {
    super(data)
  }
}

export default UpdateUserInfo
