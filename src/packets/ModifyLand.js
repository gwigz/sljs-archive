/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ModifyLand
 */
class ModifyLand extends Packet {
  static id = 124
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['modifyBlock', { quantity: 1, parameters: [['action', 'U8'], ['brushSize', 'U8'], ['seconds', 'F32'], ['height', 'F32']] }],
    ['parcelData', { parameters: [['local', 'S32'], ['west', 'F32'], ['south', 'F32'], ['east', 'F32'], ['north', 'F32']] }],
    ['modifyBlockExtended', { parameters: [['brushSize', 'F32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U8} [data.modifyBlock.action] Action
   * @param {U8} [data.modifyBlock.brushSize] BrushSize
   * @param {F32} [data.modifyBlock.seconds] Seconds
   * @param {F32} [data.modifyBlock.height] Height
   * @param {S32} [data.parcelData.local] LocalID
   * @param {F32} [data.parcelData.west] West
   * @param {F32} [data.parcelData.south] South
   * @param {F32} [data.parcelData.east] East
   * @param {F32} [data.parcelData.north] North
   * @param {F32} [data.modifyBlockExtended.brushSize] BrushSize
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ModifyLand
