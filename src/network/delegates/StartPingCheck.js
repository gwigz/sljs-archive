import Delegate from './Delegate'
import { CompletePingCheck } from '../packets'

class StartPingCheck extends Delegate {
  async handle (packet) {
    this.circuit.send(new CompletePingCheck(packet.data))
  }
}

export default StartPingCheck
