import Delegate from './Delegate'

class ObjectUpdate extends Delegate {
  async handle (packet) {
    console.log(packet)
  }
}

export default ObjectUpdate
