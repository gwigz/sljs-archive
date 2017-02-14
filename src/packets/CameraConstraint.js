/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * CameraConstraint
 */
class CameraConstraint extends Packet {
  static id = 22
  static frequency = 2
  static trusted = true
  static compression = true

  static format = new Collection([
    ['cameraCollidePlane', { quantity: 1, parameters: new Collection([['plane', 'LLVector4']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLVector4} [data.cameraCollidePlane.plane] Plane
   */
  constructor (data = {}) {
    super(data)
  }
}

export default CameraConstraint
