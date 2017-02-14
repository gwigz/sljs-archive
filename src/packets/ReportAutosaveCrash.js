/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ReportAutosaveCrash
 */
class ReportAutosaveCrash extends Packet {
  static id = 128
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['autosaveData', { quantity: 1, parameters: new Collection([['pID', 'S32'], ['status', 'S32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {S32} [data.autosaveData.pID] PID
   * @param {S32} [data.autosaveData.status] Status
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ReportAutosaveCrash
