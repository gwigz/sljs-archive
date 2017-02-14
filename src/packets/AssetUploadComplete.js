/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AssetUploadComplete
 */
class AssetUploadComplete extends Packet {
  static id = 334
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['assetBlock', { quantity: 1, parameters: new Collection([['uUID', 'LLUUID'], ['type', 'S8'], ['success', 'boolean']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.assetBlock.uUID] UUID
   * @param {S8} [data.assetBlock.type] Type
   * @param {BOOL} [data.assetBlock.success] Success
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AssetUploadComplete
