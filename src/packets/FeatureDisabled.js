/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * FeatureDisabled
 */
class FeatureDisabled extends Packet {
  static id = 19
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['failureInfo', { quantity: 1, parameters: [['errorMessage', 'Variable1'], ['agent', 'LLUUID'], ['transaction', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {Variable1} [data.failureInfo.errorMessage] ErrorMessage
   * @param {LLUUID} [data.failureInfo.agent] AgentID
   * @param {LLUUID} [data.failureInfo.transaction] TransactionID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default FeatureDisabled
