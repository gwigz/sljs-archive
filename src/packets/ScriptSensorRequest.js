/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ScriptSensorRequest
 */
class ScriptSensorRequest extends Packet {
  static id = 247
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['requester', { quantity: 1, parameters: new Collection([['source', 'LLUUID'], ['request', 'LLUUID'], ['search', 'LLUUID'], ['searchPos', 'LLVector3'], ['searchDir', 'LLQuaternion'], ['searchName', 'Variable1'], ['type', 'S32'], ['range', 'F32'], ['arc', 'F32'], ['regionHandle', 'U64'], ['searchRegions', 'U8']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.requester.source] SourceID
   * @param {LLUUID} [data.requester.request] RequestID
   * @param {LLUUID} [data.requester.search] SearchID
   * @param {LLVector3} [data.requester.searchPos] SearchPos
   * @param {LLQuaternion} [data.requester.searchDir] SearchDir
   * @param {Variable1} [data.requester.searchName] SearchName
   * @param {S32} [data.requester.type] Type
   * @param {F32} [data.requester.range] Range
   * @param {F32} [data.requester.arc] Arc
   * @param {U64} [data.requester.regionHandle] RegionHandle
   * @param {U8} [data.requester.searchRegions] SearchRegions
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ScriptSensorRequest
