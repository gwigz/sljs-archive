const AbstractHandler = require('./AbstractHandler')
const PKID = require('../../../../utilities/Packets')

class RegionHandshake extends AbstractHandler {
  handle() {
    const agent = this.manager.client.agent

    this.manager.send(PKID.RegionHandshakeReply, {
      agentData: {
        agent: agent.id,
        session: agent.session
      },
      regionInfo: {
        // Set to support self appearance.
        flags: 0x0100
      }
    })
  }
}

module.exports = RegionHandshake
