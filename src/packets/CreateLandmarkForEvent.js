/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * CreateLandmarkForEvent
 */
class CreateLandmarkForEvent extends Packet {
  static id = 306
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['eventData', { quantity: 1, parameters: new Collection([['event', 'U32']]) }],
    ['inventoryBlock', { quantity: 1, parameters: new Collection([['folder', 'LLUUID'], ['name', 'Variable1']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.eventData.event] EventID
   * @param {LLUUID} [data.inventoryBlock.folder] FolderID
   * @param {Variable1} [data.inventoryBlock.name] Name
   */
  constructor (data = {}) {
    super(data)
  }
}

export default CreateLandmarkForEvent
