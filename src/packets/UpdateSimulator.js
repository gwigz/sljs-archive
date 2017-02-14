/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * UpdateSimulator
 */
class UpdateSimulator extends Packet {
  static id = 17
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['simulatorInfo', { quantity: 1, parameters: new Collection([['region', 'LLUUID'], ['simName', 'Variable1'], ['estate', 'U32'], ['simAccess', 'U8']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.simulatorInfo.region] RegionID
   * @param {Variable1} [data.simulatorInfo.simName] SimName
   * @param {U32} [data.simulatorInfo.estate] EstateID
   * @param {U8} [data.simulatorInfo.simAccess] SimAccess
   */
  constructor (data = {}) {
    super(data)
  }
}

export default UpdateSimulator
