/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ChatPass
 */
class ChatPass extends Packet {
  static id = 239
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['chatData', { quantity: 1, parameters: new Collection([['channel', 'S32'], ['position', 'LLVector3'], ['id', 'LLUUID'], ['owner', 'LLUUID'], ['name', 'Variable1'], ['sourceType', 'U8'], ['type', 'U8'], ['radius', 'F32'], ['simAccess', 'U8'], ['message', 'Variable2']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {S32} [data.chatData.channel] Channel
   * @param {LLVector3} [data.chatData.position] Position
   * @param {LLUUID} [data.chatData.id] ID
   * @param {LLUUID} [data.chatData.owner] OwnerID
   * @param {Variable1} [data.chatData.name] Name
   * @param {U8} [data.chatData.sourceType] SourceType
   * @param {U8} [data.chatData.type] Type
   * @param {F32} [data.chatData.radius] Radius
   * @param {U8} [data.chatData.simAccess] SimAccess
   * @param {Variable2} [data.chatData.message] Message
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ChatPass
