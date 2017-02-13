/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * MergeParcel
 */
class MergeParcel extends Packet {
  static id = 223
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['masterParcelData', { quantity: 1, parameters: [['master', 'LLUUID']] }],
    ['slaveParcelData', { parameters: [['slave', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.masterParcelData.master] MasterID
   * @param {LLUUID} [data.slaveParcelData.slave] SlaveID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default MergeParcel
