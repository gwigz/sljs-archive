/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AvatarSitResponse
 */
class AvatarSitResponse extends Packet {
  static id = 21
  static frequency = 2
  static trusted = true
  static compression = true

  static format = new Collection([
    ['sitObject', { quantity: 1, parameters: new Collection([['id', 'LLUUID']]) }],
    ['sitTransform', { quantity: 1, parameters: new Collection([['autoPilot', 'boolean'], ['sitPosition', 'LLVector3'], ['sitRotation', 'LLQuaternion'], ['cameraEyeOffset', 'LLVector3'], ['cameraAtOffset', 'LLVector3'], ['forceMouselook', 'boolean']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.sitObject.id] ID
   * @param {BOOL} [data.sitTransform.autoPilot] AutoPilot
   * @param {LLVector3} [data.sitTransform.sitPosition] SitPosition
   * @param {LLQuaternion} [data.sitTransform.sitRotation] SitRotation
   * @param {LLVector3} [data.sitTransform.cameraEyeOffset] CameraEyeOffset
   * @param {LLVector3} [data.sitTransform.cameraAtOffset] CameraAtOffset
   * @param {BOOL} [data.sitTransform.forceMouselook] ForceMouselook
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AvatarSitResponse
