import { CompletePingCheck } from '../packets'
import Delegate from './Delegate'

class StartPingCheck extends Delegate {
  public async handle (packet): void {
    this.circuit.send(new CompletePingCheck(packet.data))
  }
}

export default StartPingCheck
