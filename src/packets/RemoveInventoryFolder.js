/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RemoveInventoryFolder
 */
class RemoveInventoryFolder extends Packet {
  static id = 276
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['folderData', { parameters: new Collection([['folder', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.folderData.folder] FolderID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RemoveInventoryFolder
