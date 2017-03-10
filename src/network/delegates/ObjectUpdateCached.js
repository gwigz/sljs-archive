import Delegate from './Delegate'
import { RequestMultipleObjects } from '../packets'

class ObjectUpdateCached extends Delegate {
  async handle (packet) {
    const uncached = packet.data.objectData.map((data) => ({
      id: data.id,
      cacheMissType: 0
    }))

    this.circuit.send(new RequestMultipleObjects({
      objectData: uncached
    }))
  }
}

export default ObjectUpdateCached
