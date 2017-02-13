/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ConfirmAuctionStart
 */
class ConfirmAuctionStart extends Packet {
  static id = 230
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['auctionData', { quantity: 1, parameters: [['parcel', 'LLUUID'], ['auction', 'U32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.auctionData.parcel] ParcelID
   * @param {U32} [data.auctionData.auction] AuctionID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ConfirmAuctionStart
