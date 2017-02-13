/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RequestImage
 */
class RequestImage extends Packet {
  static id = 8
  static frequency = 2
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['requestImage', { parameters: [['image', 'LLUUID'], ['discardLevel', 'S8'], ['downloadPriority', 'F32'], ['packet', 'U32'], ['type', 'U8']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.requestImage.image] Image
   * @param {S8} [data.requestImage.discardLevel] DiscardLevel
   * @param {F32} [data.requestImage.downloadPriority] DownloadPriority
   * @param {U32} [data.requestImage.packet] Packet
   * @param {U8} [data.requestImage.type] Type
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RequestImage
