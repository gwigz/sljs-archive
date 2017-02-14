/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RezObjectFromNotecard
 */
class RezObjectFromNotecard extends Packet {
  static id = 294
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID'], ['group', 'LLUUID']]) }],
    ['rezData', { quantity: 1, parameters: new Collection([['fromTask', 'LLUUID'], ['bypassRaycast', 'U8'], ['rayStart', 'LLVector3'], ['rayEnd', 'LLVector3'], ['rayTarget', 'LLUUID'], ['rayEndIsIntersection', 'boolean'], ['rezSelected', 'boolean'], ['removeItem', 'boolean'], ['itemFlags', 'U32'], ['groupMask', 'U32'], ['everyoneMask', 'U32'], ['nextOwnerMask', 'U32']]) }],
    ['notecardData', { quantity: 1, parameters: new Collection([['notecardItem', 'LLUUID'], ['object', 'LLUUID']]) }],
    ['inventoryData', { parameters: new Collection([['item', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.agentData.group] GroupID
   * @param {LLUUID} [data.rezData.fromTask] FromTaskID
   * @param {U8} [data.rezData.bypassRaycast] BypassRaycast
   * @param {LLVector3} [data.rezData.rayStart] RayStart
   * @param {LLVector3} [data.rezData.rayEnd] RayEnd
   * @param {LLUUID} [data.rezData.rayTarget] RayTargetID
   * @param {BOOL} [data.rezData.rayEndIsIntersection] RayEndIsIntersection
   * @param {BOOL} [data.rezData.rezSelected] RezSelected
   * @param {BOOL} [data.rezData.removeItem] RemoveItem
   * @param {U32} [data.rezData.itemFlags] ItemFlags
   * @param {U32} [data.rezData.groupMask] GroupMask
   * @param {U32} [data.rezData.everyoneMask] EveryoneMask
   * @param {U32} [data.rezData.nextOwnerMask] NextOwnerMask
   * @param {LLUUID} [data.notecardData.notecardItem] NotecardItemID
   * @param {LLUUID} [data.notecardData.object] ObjectID
   * @param {LLUUID} [data.inventoryData.item] ItemID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RezObjectFromNotecard
