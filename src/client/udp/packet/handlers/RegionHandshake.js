const AbstractHandler = require('./AbstractHandler')
const PKID = require('../../../../utilities/Packets')

class RegionHandshake extends AbstractHandler {
  handle () {
    const agent = this.manager.client.agent

    // RegionInfo
    // { RegionFlags   U32 }
    // { SimAccess   U8  }
    // { SimName     Variable  1 } // string
    // { SimOwner    LLUUID  }
    // { IsEstateManager BOOL  } // this agent, for this sim

    // RegionInfo2
    // { RegionID    LLUUID  }

    // RegionInfo3 Single
    // { CPUClassID        S32   }
    // { CPURatio        S32   }
    // { ColoName        Variable  1 } // string
    // { ProductSKU        Variable  1 } // string
    // { ProductName       Variable  1 } // string

    // TODO: Add toggle for this, if we don't want objects dont send this.
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
