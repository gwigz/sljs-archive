import Delegate from './Delegate'

class ObjectUpdateCached extends Delegate {
  async handle (packet) {
    console.log(packet)
  }
}

export default ObjectUpdateCached
