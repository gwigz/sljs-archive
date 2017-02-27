import Delegate from './Delegate'

class ObjectUpdateCached extends Delegate {
  async handle (packet) {
    // RequestMultipleObjects
    console.log(packet)
  }
}

export default ObjectUpdateCached
