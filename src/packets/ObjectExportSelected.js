/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ObjectExportSelected
 */
class ObjectExportSelected extends Packet {
  static id = 123
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['request', 'LLUUID'], ['volumeDetail', 'S16']]) }],
    ['objectData', { parameters: new Collection([['object', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.request] RequestID
   * @param {S16} [data.agentData.volumeDetail] VolumeDetail
   * @param {LLUUID} [data.objectData.object] ObjectID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ObjectExportSelected
