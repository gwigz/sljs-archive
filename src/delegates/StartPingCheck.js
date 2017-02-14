import Delegate from './Delegate'

import { CompletePingCheck } from '../network/packets'

class StartPingCheck extends Delegate {
  handle (parameters) {
    this.core.send(new CompletePingCheck(parameters))
  }
}

export default StartPingCheck
