/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * CreateNewOutfitAttachments
 */
class CreateNewOutfitAttachments extends Packet {
  static id = 398
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['headerData', { quantity: 1, parameters: [['newFolder', 'LLUUID']] }],
    ['objectData', { parameters: [['oldItem', 'LLUUID'], ['oldFolder', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.headerData.newFolder] NewFolderID
   * @param {LLUUID} [data.objectData.oldItem] OldItemID
   * @param {LLUUID} [data.objectData.oldFolder] OldFolderID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default CreateNewOutfitAttachments
