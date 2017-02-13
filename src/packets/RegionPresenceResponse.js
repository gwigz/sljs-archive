/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RegionPresenceResponse
 */
class RegionPresenceResponse extends Packet {
  static id = 16
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['regionData', { parameters: [['region', 'LLUUID'], ['regionHandle', 'U64'], ['internalRegionIP', 'IPADDR'], ['externalRegionIP', 'IPADDR'], ['regionPort', 'IPPORT'], ['validUntil', 'F64'], ['message', 'Variable1']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.regionData.region] RegionID
   * @param {U64} [data.regionData.regionHandle] RegionHandle
   * @param {IPADDR} [data.regionData.internalRegionIP] InternalRegionIP
   * @param {IPADDR} [data.regionData.externalRegionIP] ExternalRegionIP
   * @param {IPPORT} [data.regionData.regionPort] RegionPort
   * @param {F64} [data.regionData.validUntil] ValidUntil
   * @param {Variable1} [data.regionData.message] Message
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RegionPresenceResponse
