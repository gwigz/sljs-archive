/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * UserReportInternal
 */
class UserReportInternal extends Packet {
  static id = 21
  static frequency = 0
  static trusted = true
  static compression = true

  static format = new Collection([
    ['reportData', { quantity: 1, parameters: [['reportType', 'U8'], ['category', 'U8'], ['reporter', 'LLUUID'], ['viewerPosition', 'LLVector3'], ['agentPosition', 'LLVector3'], ['screenshot', 'LLUUID'], ['object', 'LLUUID'], ['owner', 'LLUUID'], ['lastOwner', 'LLUUID'], ['creator', 'LLUUID'], ['region', 'LLUUID'], ['abuser', 'LLUUID'], ['abuseRegionName', 'Variable1'], ['abuseRegion', 'LLUUID'], ['summary', 'Variable1'], ['details', 'Variable2'], ['versionString', 'Variable1']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U8} [data.reportData.reportType] ReportType
   * @param {U8} [data.reportData.category] Category
   * @param {LLUUID} [data.reportData.reporter] ReporterID
   * @param {LLVector3} [data.reportData.viewerPosition] ViewerPosition
   * @param {LLVector3} [data.reportData.agentPosition] AgentPosition
   * @param {LLUUID} [data.reportData.screenshot] ScreenshotID
   * @param {LLUUID} [data.reportData.object] ObjectID
   * @param {LLUUID} [data.reportData.owner] OwnerID
   * @param {LLUUID} [data.reportData.lastOwner] LastOwnerID
   * @param {LLUUID} [data.reportData.creator] CreatorID
   * @param {LLUUID} [data.reportData.region] RegionID
   * @param {LLUUID} [data.reportData.abuser] AbuserID
   * @param {Variable1} [data.reportData.abuseRegionName] AbuseRegionName
   * @param {LLUUID} [data.reportData.abuseRegion] AbuseRegionID
   * @param {Variable1} [data.reportData.summary] Summary
   * @param {Variable2} [data.reportData.details] Details
   * @param {Variable1} [data.reportData.versionString] VersionString
   */
  constructor (data = {}) {
    super(data)
  }
}

export default UserReportInternal
