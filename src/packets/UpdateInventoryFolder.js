/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * UpdateInventoryFolder
 */
class UpdateInventoryFolder extends Packet {
  static id = 274
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['folderData', { parameters: [['folder', 'LLUUID'], ['parent', 'LLUUID'], ['type', 'S8'], ['name', 'Variable1']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.folderData.folder] FolderID
   * @param {LLUUID} [data.folderData.parent] ParentID
   * @param {S8} [data.folderData.type] Type
   * @param {Variable1} [data.folderData.name] Name
   */
  constructor (data = {}) {
    super(data)
  }
}

export default UpdateInventoryFolder
