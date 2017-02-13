/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ActivateGestures
 */
class ActivateGestures extends Packet {
  static id = 316
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID'], ['flags', 'U32']] }],
    ['data', { parameters: [['item', 'LLUUID'], ['asset', 'LLUUID'], ['gestureFlags', 'U32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.agentData.flags] Flags
   * @param {LLUUID} [data.data.item] ItemID
   * @param {LLUUID} [data.data.asset] AssetID
   * @param {U32} [data.data.gestureFlags] GestureFlags
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ActivateGestures
