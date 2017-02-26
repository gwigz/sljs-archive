import Delegate from './Delegate'
import PacketBuffer from '../helpers/PacketBuffer'

import * as Types from '../types'

import { Constants } from '../../utilities'

class ImprovedTerseObjectUpdate extends Delegate {
  async handle (packet) {
    // const region = packet.data.regionData[0].regionHandle

    for (const { data } of packet.data.objectData) {
      const buffer = new PacketBuffer(data, true)

      if (buffer.length !== 44 && buffer.length !== 60) {
        throw Error(Constants.Errors.UNEXPECTED_OBJECT_UPDATE_LENGTH)
      }

      // TODO: Lookup object by local ID, update if found.

      const test = {
        id: buffer.read(Types.U32),
        state: buffer.read(Types.U8),
        agent: buffer.read(Boolean)
      }

      if (test.agent) {
        // This contains a normal and Z position, we don't use these at the
        // moment for anything, so don't include them for now.
        // test.collisionPlane = buffer.read(Types.Vector4)
        bufer.position += Types.Vector3.size
      }

      test.position = buffer.read(Types.Vector3)

      // U16 compressed velocity properties...
      test.velocity = buffer.read(Types.Vector3, Types.U16, -64.0, 64.0)
      test.rotation = buffer.read(Types.Quaternion, Types.U16, -1.0, 1.0)
      test.angularVelocity = buffer.read(Types.Vector3, Types.U16, -64.0, 64.0)

      console.log(test)
    }
  }
}P

export default ImprovedTerseObjectUpdate
