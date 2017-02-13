/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SetFollowCamProperties
 */
class SetFollowCamProperties extends Packet {
  static id = 159
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['objectData', { quantity: 1, parameters: [['object', 'LLUUID']] }],
    ['cameraProperty', { parameters: [['type', 'S32'], ['value', 'F32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.objectData.object] ObjectID
   * @param {S32} [data.cameraProperty.type] Type
   * @param {F32} [data.cameraProperty.value] Value
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SetFollowCamProperties
