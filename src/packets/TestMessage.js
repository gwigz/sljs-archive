/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * TestMessage
 */
class TestMessage extends Packet {
  static id = 1
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['testBlock1', { quantity: 1, parameters: [['test1', 'U32']] }],
    ['neighborBlock', { quantity: 4, parameters: [['test0', 'U32'], ['test1', 'U32'], ['test2', 'U32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U32} [data.testBlock1.test1] Test1
   * @param {U32} [data.neighborBlock.test0] Test0
   * @param {U32} [data.neighborBlock.test1] Test1
   * @param {U32} [data.neighborBlock.test2] Test2
   */
  constructor (data = {}) {
    super(data)
  }
}

export default TestMessage
