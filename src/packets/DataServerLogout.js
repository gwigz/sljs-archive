/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * DataServerLogout
 */
class DataServerLogout extends Packet {
  static id = 251
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['userData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['viewerIP', 'IPADDR'], ['disconnect', 'boolean'], ['session', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.userData.agent] AgentID
   * @param {IPADDR} [data.userData.viewerIP] ViewerIP
   * @param {BOOL} [data.userData.disconnect] Disconnect
   * @param {LLUUID} [data.userData.session] SessionID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default DataServerLogout
