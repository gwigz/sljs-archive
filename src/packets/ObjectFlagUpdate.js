/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ObjectFlagUpdate
 */
class ObjectFlagUpdate extends Packet {
  static id = 94
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID'], ['objectLocal', 'U32'], ['usePhysics', 'boolean'], ['isTemporary', 'boolean'], ['isPhantom', 'boolean'], ['castsShadows', 'boolean']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.agentData.objectLocal] ObjectLocalID
   * @param {BOOL} [data.agentData.usePhysics] UsePhysics
   * @param {BOOL} [data.agentData.isTemporary] IsTemporary
   * @param {BOOL} [data.agentData.isPhantom] IsPhantom
   * @param {BOOL} [data.agentData.castsShadows] CastsShadows
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ObjectFlagUpdate
