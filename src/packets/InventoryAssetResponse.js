/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * InventoryAssetResponse
 */
class InventoryAssetResponse extends Packet {
  static id = 283
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['queryData', { quantity: 1, parameters: new Collection([['query', 'LLUUID'], ['asset', 'LLUUID'], ['isReadable', 'boolean']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.queryData.query] QueryID
   * @param {LLUUID} [data.queryData.asset] AssetID
   * @param {BOOL} [data.queryData.isReadable] IsReadable
   */
  constructor (data = {}) {
    super(data)
  }
}

export default InventoryAssetResponse
