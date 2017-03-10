import Delegate from './Delegate'
import PacketBuffer from '../helpers/PacketBuffer'

import * as Types from '../types'

import { Constants } from '../../utilities'

class ImprovedTerseObjectUpdate extends Delegate {
  async handle (packet) {
    const handle = packet.data.regionData[0].regionHandle
    const region = this.region(handle)

    if (!region) {
      throw Error(Constants.UNEXPECTED_OBJECT_UPDATE)
    }

    for (const { data } of packet.data.objectData) {
      const buffer = new PacketBuffer(data, true)

      if (buffer.length !== 44 && buffer.length !== 60) {
        throw Error(Constants.Errors.UNEXPECTED_OBJECT_UPDATE_LENGTH)
      }

      const id = buffer.read(Types.U32)
      const entity = region.objects.get(id)

      if (!entity) {
        // TODO: We would want to log this, as a warning.
        continue
      }

      entity.state = buffer.read(Types.U8)

      // Next byte defines if this update is for an avatar or not.
      if (buffer.read(Boolean)) {
        // This contains a normal and Z position for the avatars foot shadow,
        // we don't use these at the moment for anything, so don't include them
        // for now.
        // entity.agent.something(...buffer.read(Types.Vector4))
        buffer.position += Types.Vector4.size
      }

      entity.position = buffer.read(Types.Vector3)

      // U16 compressed velocity properties...
      entity.velocity = buffer.read(Types.Vector3, Types.U16, -64.0, 64.0)
      entity.rotation = buffer.read(Types.Quaternion, false, Types.U16, -1.0, 1.0)

      // entity.angularVelocity = buffer.read(Types.Vector3, Types.U16, -64.0, 64.0)
      // entity.emit('moved')
    }
  }
}

export default ImprovedTerseObjectUpdate
