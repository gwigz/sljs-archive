/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ScriptDialog
 */
class ScriptDialog extends Packet {
  static id = 190
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['data', { quantity: 1, parameters: [['object', 'LLUUID'], ['firstName', 'Variable1'], ['lastName', 'Variable1'], ['objectName', 'Variable1'], ['message', 'Variable2'], ['chatChannel', 'S32'], ['image', 'LLUUID']] }],
    ['buttons', { parameters: [['buttonLabel', 'Variable1']] }],
    ['ownerData', { parameters: [['owner', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.data.object] ObjectID
   * @param {Variable1} [data.data.firstName] FirstName
   * @param {Variable1} [data.data.lastName] LastName
   * @param {Variable1} [data.data.objectName] ObjectName
   * @param {Variable2} [data.data.message] Message
   * @param {S32} [data.data.chatChannel] ChatChannel
   * @param {LLUUID} [data.data.image] ImageID
   * @param {Variable1} [data.buttons.buttonLabel] ButtonLabel
   * @param {LLUUID} [data.ownerData.owner] OwnerID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ScriptDialog
