/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * UserInfoReply
 */
class UserInfoReply extends Packet {
  static id = 400
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID']] }],
    ['userData', { quantity: 1, parameters: [['imViaEMail', 'BOOL'], ['directoryVisibility', 'Variable1'], ['eMail', 'Variable2']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {BOOL} [data.userData.imViaEMail] IMViaEMail
   * @param {Variable1} [data.userData.directoryVisibility] DirectoryVisibility
   * @param {Variable2} [data.userData.eMail] EMail
   */
  constructor (data = {}) {
    super(data)
  }
}

export default UserInfoReply
