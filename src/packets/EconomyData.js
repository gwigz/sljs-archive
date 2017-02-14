/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * EconomyData
 */
class EconomyData extends Packet {
  static id = 25
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['info', { quantity: 1, parameters: new Collection([['objectCapacity', 'S32'], ['objectCount', 'S32'], ['priceEnergyUnit', 'S32'], ['priceObjectClaim', 'S32'], ['pricePublicObjectDecay', 'S32'], ['pricePublicObjectDelete', 'S32'], ['priceParcelClaim', 'S32'], ['priceParcelClaimFactor', 'F32'], ['priceUpload', 'S32'], ['priceRentLight', 'S32'], ['teleportMinPrice', 'S32'], ['teleportPriceExponent', 'F32'], ['energyEfficiency', 'F32'], ['priceObjectRent', 'F32'], ['priceObjectScaleFactor', 'F32'], ['priceParcelRent', 'S32'], ['priceGroupCreate', 'S32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {S32} [data.info.objectCapacity] ObjectCapacity
   * @param {S32} [data.info.objectCount] ObjectCount
   * @param {S32} [data.info.priceEnergyUnit] PriceEnergyUnit
   * @param {S32} [data.info.priceObjectClaim] PriceObjectClaim
   * @param {S32} [data.info.pricePublicObjectDecay] PricePublicObjectDecay
   * @param {S32} [data.info.pricePublicObjectDelete] PricePublicObjectDelete
   * @param {S32} [data.info.priceParcelClaim] PriceParcelClaim
   * @param {F32} [data.info.priceParcelClaimFactor] PriceParcelClaimFactor
   * @param {S32} [data.info.priceUpload] PriceUpload
   * @param {S32} [data.info.priceRentLight] PriceRentLight
   * @param {S32} [data.info.teleportMinPrice] TeleportMinPrice
   * @param {F32} [data.info.teleportPriceExponent] TeleportPriceExponent
   * @param {F32} [data.info.energyEfficiency] EnergyEfficiency
   * @param {F32} [data.info.priceObjectRent] PriceObjectRent
   * @param {F32} [data.info.priceObjectScaleFactor] PriceObjectScaleFactor
   * @param {S32} [data.info.priceParcelRent] PriceParcelRent
   * @param {S32} [data.info.priceGroupCreate] PriceGroupCreate
   */
  constructor (data = {}) {
    super(data)
  }
}

export default EconomyData
