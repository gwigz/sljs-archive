/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * ParcelMediaUpdate Packet
 */
class ParcelMediaUpdate extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 420

  /**
   * Packet frequency. This value determines whether the message ID is 8, 16, or
   * 32 bits. There can be unique 254 messages IDs in the "High" or "Medium"
   * frequencies and 32,000 in "Low". A message with a "Fixed" frequency also
   * defines its own ID and is considered to be a signal.
   *
   * @type {number}
   */
  static frequency = 0

  /**
   * If this value is true, the client cannot send this packet as circuits only
   * accept trusted packets from internal connections (to utility servers etc).
   *
   * @type {[type]}
   */
  static trusted = true

  /**
   * States if this packet should use or be using zerocoding, to attempt to
   * compress the sequences of zeros in the message in order to reduce network
   * load.
   *
   * @type {[type]}
   */
  static compression = false

  /**
   * Determines the blocks that are are contained in the message and it's
   * required parameters.
   *
   * @see {@link http://wiki.secondlife.com/wiki/Message_Layout}
   * @type {Collection}
   */
  static format = new Collection([
    ['dataBlock', { quantity: 1, parameters: new Collection([['mediaURL', Types.Variable1], ['media', Types.UUID], ['mediaAutoScale', Types.U8]]) }],
    ['dataBlockExtended', { quantity: 1, parameters: new Collection([['mediaType', Types.Variable1], ['mediaDesc', Types.Variable1], ['mediaWidth', Types.S32], ['mediaHeight', Types.S32], ['mediaLoop', Types.U8]]) }]
  ])

  /**
   * ParcelMediaUpdate constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link ParcelMediaUpdate.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {Variable1} [data.dataBlock.mediaURL] MediaURL
   * @param {LLUUID} [data.dataBlock.media] MediaID
   * @param {U8} [data.dataBlock.mediaAutoScale] MediaAutoScale
   * @param {Variable1} [data.dataBlockExtended.mediaType] MediaType
   * @param {Variable1} [data.dataBlockExtended.mediaDesc] MediaDesc
   * @param {S32} [data.dataBlockExtended.mediaWidth] MediaWidth
   * @param {S32} [data.dataBlockExtended.mediaHeight] MediaHeight
   * @param {U8} [data.dataBlockExtended.mediaLoop] MediaLoop
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ParcelMediaUpdate
