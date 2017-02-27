import Delegate from './Delegate'

class KillObject extends Delegate {
  async handle (packet) {
    for (const region of this.client.regions.values()) {
      for (const { id } of packet.data.objectData) {
        region.objects.delete(id)
      }
    }
  }
}

export default KillObject
