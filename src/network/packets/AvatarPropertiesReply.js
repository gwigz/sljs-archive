/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * AvatarPropertiesReply Packet
 */
class AvatarPropertiesReply extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 171

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
  static compression = true

  /**
   * Determines the blocks that are are contained in the message and it's
   * required parameters.
   *
   * @see {@link http://wiki.secondlife.com/wiki/Message_Layout}
   * @type {Collection}
   */
  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', Types.UUID], ['avatar', Types.UUID]]) }],
    ['propertiesData', { quantity: 1, parameters: new Collection([['image', Types.UUID], ['fLImage', Types.UUID], ['partner', Types.UUID], ['aboutText', Types.Variable2], ['fLAboutText', Types.Variable1], ['bornOn', Types.Variable1], ['profileURL', Types.Variable1], ['charterMember', Types.Variable1], ['flags', Types.U32]]) }]
  ])

  /**
   * AvatarPropertiesReply constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link AvatarPropertiesReply.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {UUID} [data.agentData.agent] AgentID
   * @param {UUID} [data.agentData.avatar] AvatarID
   * @param {UUID} [data.propertiesData.image] ImageID
   * @param {UUID} [data.propertiesData.fLImage] FLImageID
   * @param {UUID} [data.propertiesData.partner] PartnerID
   * @param {Variable2} [data.propertiesData.aboutText] AboutText
   * @param {Variable1} [data.propertiesData.fLAboutText] FLAboutText
   * @param {Variable1} [data.propertiesData.bornOn] BornOn
   * @param {Variable1} [data.propertiesData.profileURL] ProfileURL
   * @param {Variable1} [data.propertiesData.charterMember] CharterMember
   * @param {U32} [data.propertiesData.flags] Flags
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AvatarPropertiesReply
