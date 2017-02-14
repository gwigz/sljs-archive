/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AgentAnimation
 */
class AgentAnimation extends Packet {
  static id = 5
  static frequency = 2
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['animationList', { parameters: new Collection([['anim', 'LLUUID'], ['startAnim', 'boolean']]) }],
    ['physicalAvatarEventList', { parameters: new Collection([['typeData', 'Variable1']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.animationList.anim] AnimID
   * @param {BOOL} [data.animationList.startAnim] StartAnim
   * @param {Variable1} [data.physicalAvatarEventList.typeData] TypeData
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AgentAnimation
