/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * EventInfoReply
 */
class EventInfoReply extends Packet {
  static id = 180
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID']]) }],
    ['eventData', { quantity: 1, parameters: new Collection([['event', 'U32'], ['creator', 'Variable1'], ['name', 'Variable1'], ['category', 'Variable1'], ['desc', 'Variable2'], ['date', 'Variable1'], ['dateUTC', 'U32'], ['duration', 'U32'], ['cover', 'U32'], ['amount', 'U32'], ['simName', 'Variable1'], ['globalPos', 'LLVector3d'], ['eventFlags', 'U32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {U32} [data.eventData.event] EventID
   * @param {Variable1} [data.eventData.creator] Creator
   * @param {Variable1} [data.eventData.name] Name
   * @param {Variable1} [data.eventData.category] Category
   * @param {Variable2} [data.eventData.desc] Desc
   * @param {Variable1} [data.eventData.date] Date
   * @param {U32} [data.eventData.dateUTC] DateUTC
   * @param {U32} [data.eventData.duration] Duration
   * @param {U32} [data.eventData.cover] Cover
   * @param {U32} [data.eventData.amount] Amount
   * @param {Variable1} [data.eventData.simName] SimName
   * @param {LLVector3d} [data.eventData.globalPos] GlobalPos
   * @param {U32} [data.eventData.eventFlags] EventFlags
   */
  constructor (data = {}) {
    super(data)
  }
}

export default EventInfoReply
