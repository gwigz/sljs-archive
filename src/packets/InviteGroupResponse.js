/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * InviteGroupResponse
 */
class InviteGroupResponse extends Packet {
  static id = 350
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['inviteData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['invitee', 'LLUUID'], ['group', 'LLUUID'], ['role', 'LLUUID'], ['membershipFee', 'S32']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.inviteData.agent] AgentID
   * @param {LLUUID} [data.inviteData.invitee] InviteeID
   * @param {LLUUID} [data.inviteData.group] GroupID
   * @param {LLUUID} [data.inviteData.role] RoleID
   * @param {S32} [data.inviteData.membershipFee] MembershipFee
   */
  constructor (data = {}) {
    super(data)
  }
}

export default InviteGroupResponse
