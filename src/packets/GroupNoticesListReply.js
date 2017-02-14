/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * GroupNoticesListReply
 */
class GroupNoticesListReply extends Packet {
  static id = 59
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['group', 'LLUUID']]) }],
    ['data', { parameters: new Collection([['notice', 'LLUUID'], ['timestamp', 'U32'], ['fromName', 'Variable2'], ['subject', 'Variable2'], ['hasAttachment', 'boolean'], ['assetType', 'U8']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.group] GroupID
   * @param {LLUUID} [data.data.notice] NoticeID
   * @param {U32} [data.data.timestamp] Timestamp
   * @param {Variable2} [data.data.fromName] FromName
   * @param {Variable2} [data.data.subject] Subject
   * @param {BOOL} [data.data.hasAttachment] HasAttachment
   * @param {U8} [data.data.assetType] AssetType
   */
  constructor (data = {}) {
    super(data)
  }
}

export default GroupNoticesListReply
