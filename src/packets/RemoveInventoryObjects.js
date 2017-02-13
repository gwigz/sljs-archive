/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RemoveInventoryObjects
 */
class RemoveInventoryObjects extends Packet {
  static id = 284
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['folderData', { parameters: [['folder', 'LLUUID']] }],
    ['itemData', { parameters: [['item', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.folderData.folder] FolderID
   * @param {LLUUID} [data.itemData.item] ItemID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RemoveInventoryObjects
