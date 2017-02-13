/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ClearFollowCamProperties
 */
class ClearFollowCamProperties extends Packet {
  static id = 160
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['objectData', { quantity: 1, parameters: [['object', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.objectData.object] ObjectID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ClearFollowCamProperties
