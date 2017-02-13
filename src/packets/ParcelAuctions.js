/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ParcelAuctions
 */
class ParcelAuctions extends Packet {
  static id = 234
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['parcelData', { parameters: [['parcel', 'LLUUID'], ['winner', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.parcelData.parcel] ParcelID
   * @param {LLUUID} [data.parcelData.winner] WinnerID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ParcelAuctions
