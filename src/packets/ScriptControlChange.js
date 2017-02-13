/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ScriptControlChange
 */
class ScriptControlChange extends Packet {
  static id = 189
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['data', { parameters: [['takeControls', 'BOOL'], ['controls', 'U32'], ['passToAgent', 'BOOL']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {BOOL} [data.data.takeControls] TakeControls
   * @param {U32} [data.data.controls] Controls
   * @param {BOOL} [data.data.passToAgent] PassToAgent
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ScriptControlChange
