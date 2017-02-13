/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ScriptQuestion
 */
class ScriptQuestion extends Packet {
  static id = 188
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['data', { quantity: 1, parameters: [['task', 'LLUUID'], ['item', 'LLUUID'], ['objectName', 'Variable1'], ['objectOwner', 'Variable1'], ['questions', 'S32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.data.task] TaskID
   * @param {LLUUID} [data.data.item] ItemID
   * @param {Variable1} [data.data.objectName] ObjectName
   * @param {Variable1} [data.data.objectOwner] ObjectOwner
   * @param {S32} [data.data.questions] Questions
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ScriptQuestion
