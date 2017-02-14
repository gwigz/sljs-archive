/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SetGroupAcceptNotices
 */
class SetGroupAcceptNotices extends Packet {
  static id = 370
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['data', { quantity: 1, parameters: new Collection([['group', 'LLUUID'], ['acceptNotices', 'boolean']]) }],
    ['newData', { quantity: 1, parameters: new Collection([['listInProfile', 'boolean']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.data.group] GroupID
   * @param {BOOL} [data.data.acceptNotices] AcceptNotices
   * @param {BOOL} [data.newData.listInProfile] ListInProfile
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SetGroupAcceptNotices
