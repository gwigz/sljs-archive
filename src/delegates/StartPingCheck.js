import Delegate from './Delegate'
import PKID from '../utilities/Packets'

class StartPingCheck extends Delegate {
  handle (parameters) {
    this.core.send(PKID.CompletePingCheck, parameters)
  }
}

export default StartPingCheck
