import Delegate from './Delegate'
import PacketBuffer from '../helpers/PacketBuffer'
import * as Types from '../types'

class ImprovedTerseObjectUpdate extends Delegate {
  async handle (packet) {
    // const region = packet.data.regionData[0].regionHandle

    for (const { data } of packet.data.objectData) {
      const buffer = new PacketBuffer(data, true)

      const test = {
        id: buffer.read(Types.U32),
        state: buffer.read(Types.U8),
        agent: buffer.read(Boolean)
      }

      if (test.agent) {
        test.collisionPlane = buffer.read(Types.Vector4)
      }

      test.position = buffer.read(Types.Vector3)

      // test.velocity = [
      //     buffer.read(Types.U16, -64.0, 64.0),
      //     buffer.read(Types.U16, -64.0, 64.0),
      //     buffer.read(Types.U16, -64.0, 64.0)
      // ]

      // test.rotation = [
      //     buffer.read(Types.U16, -1.0, 1.0),
      //     buffer.read(Types.U16, -1.0, 1.0),
      //     buffer.read(Types.U16, -1.0, 1.0),
      //     buffer.read(Types.U16, -1.0, 1.0)
      // ]

      // test.rotationalVelocity = [
      //     buffer.read(Types.U16, -64.0, 64.0),
      //     buffer.read(Types.U16, -64.0, 64.0),
      //     buffer.read(Types.U16, -64.0, 64.0)
      // ]

      console.log(test)
    }
  }
}

export default ImprovedTerseObjectUpdate
