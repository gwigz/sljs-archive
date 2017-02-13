/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ObjectExtraParams
 */
class ObjectExtraParams extends Packet {
  static id = 99
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['objectData', { parameters: [['objectLocal', 'U32'], ['paramType', 'U16'], ['paramInUse', 'BOOL'], ['paramSize', 'U32'], ['paramData', 'Variable1']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.objectData.objectLocal] ObjectLocalID
   * @param {U16} [data.objectData.paramType] ParamType
   * @param {BOOL} [data.objectData.paramInUse] ParamInUse
   * @param {U32} [data.objectData.paramSize] ParamSize
   * @param {Variable1} [data.objectData.paramData] ParamData
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ObjectExtraParams
