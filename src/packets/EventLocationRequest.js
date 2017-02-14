/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * EventLocationRequest
 */
class EventLocationRequest extends Packet {
  static id = 307
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['queryData', { quantity: 1, parameters: new Collection([['query', 'LLUUID']]) }],
    ['eventData', { quantity: 1, parameters: new Collection([['event', 'U32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.queryData.query] QueryID
   * @param {U32} [data.eventData.event] EventID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default EventLocationRequest
