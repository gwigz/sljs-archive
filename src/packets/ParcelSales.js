/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ParcelSales
 */
class ParcelSales extends Packet {
  static id = 226
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['parcelData', { parameters: new Collection([['parcel', 'LLUUID'], ['buyer', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.parcelData.parcel] ParcelID
   * @param {LLUUID} [data.parcelData.buyer] BuyerID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ParcelSales
