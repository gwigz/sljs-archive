import Delegate from './Delegate'

class ObjectUpdateCompressed extends Delegate {
  async handle (packet) {
    console.log(packet)
  }
}

export default ObjectUpdateCompressed
