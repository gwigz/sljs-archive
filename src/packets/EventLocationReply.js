/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * EventLocationReply
 */
class EventLocationReply extends Packet {
  static id = 308
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['queryData', { quantity: 1, parameters: new Collection([['query', 'LLUUID']]) }],
    ['eventData', { quantity: 1, parameters: new Collection([['success', 'boolean'], ['region', 'LLUUID'], ['regionPos', 'LLVector3']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.queryData.query] QueryID
   * @param {BOOL} [data.eventData.success] Success
   * @param {LLUUID} [data.eventData.region] RegionID
   * @param {LLVector3} [data.eventData.regionPos] RegionPos
   */
  constructor (data = {}) {
    super(data)
  }
}

export default EventLocationReply
