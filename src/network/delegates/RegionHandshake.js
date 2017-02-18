import Delegate from './Delegate'

import { RegionHandshakeReply } from '../packets'

class RegionHandshake extends Delegate {
  async handle () {
    // RegionInfo
    // { RegionFlags   U32 }
    // { SimAccess   U8  }
    // { SimName     Variable  1 } // string
    // { SimOwner    UUID  }
    // { IsEstateManager BOOL  } // this agent, for this sim

    // RegionInfo2
    // { RegionID    UUID  }

    // RegionInfo3 Single
    // { CPUClassID        S32   }
    // { CPURatio        S32   }
    // { ColoName        Variable  1 } // string
    // { ProductSKU        Variable  1 } // string
    // { ProductName       Variable  1 } // string

    // TODO: Add toggle for this, if we don't want objects dont send this.
    this.circuit.send(new RegionHandshakeReply({
      regionInfo: {
        // Set to support self appearance.
        flags: 0x0100
      }
    }))
  }
}

export default RegionHandshake
