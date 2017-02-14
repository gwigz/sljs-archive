/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * DenyTrustedCircuit
 */
class DenyTrustedCircuit extends Packet {
  static id = 393
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['dataBlock', { quantity: 1, parameters: new Collection([['endPoint', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.dataBlock.endPoint] EndPointID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default DenyTrustedCircuit
