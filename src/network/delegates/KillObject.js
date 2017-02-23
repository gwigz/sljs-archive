import Delegate from './Delegate'

class KillObject extends Delegate {
  async handle (packet) {
    console.log(packet)
  }
}

export default KillObject
