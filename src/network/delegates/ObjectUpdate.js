import Delegate from './Delegate'

import { Entity } from '../../structures'
import { Constants } from '../../utilities'

class ObjectUpdate extends Delegate {
  async handle (packet) {
    const handle = packet.data.regionData[0].regionHandle
    const region = this.region(handle)

    if (!region) {
      throw Error(Constants.Errors.UNEXPECTED_OBJECT_UPDATE)
    }

    for (const { data } of packet.data.objectData) {
      const entity = region.objects.get(data.id)

      if (entity) {
        this.update(entity, data)
      } else {
        this.insert(data, region)
      }
    }
  }

  async update (entity, data) {
    // data.data
    // data.objectData
    // data.extraParams

    entity.id = data.id
    entity.key = data.uuid
    entity.parent = data.parent
    entity.owner = data.owner
    entity.scale = data.scale
    entity.flags = data.flags
    entity.text = { value: data.text, color: data.textColor }

    return entity
  }

  async insert (data, region) {
    const entity = new Entity(this.update({}, data))

    // Pass to entities collection, lookup ID is handled here.
    region.objects.set(data.id, entity)

    return entity
  }
}

export default ObjectUpdate
