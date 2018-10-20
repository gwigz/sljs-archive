import { CompletePingCheck, Packet } from '../packets'
import Delegate from './Delegate'

class StartPingCheck extends Delegate {
  public handle(packet: Packet): void {
    this.circuit.send(new CompletePingCheck(packet.data))
  }
}

export default StartPingCheck
