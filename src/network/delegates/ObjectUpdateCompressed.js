import Delegate from './Delegate'
import PacketBuffer from '../helpers/PacketBuffer'

import { Entity } from '../../structures'
import { Constants, Collection } from '../../utilities'

import * as Types from '../types'

const Flags = {
  NONE: 0x00,
  SCRATCH_PAD: 0x01,
  TREE_TYPE: 0x02,
  TEXT: 0x04,
  PARTICALS: 0x08,
  SOUND_DATA: 0x10,
  PARENT: 0x20,
  TEXTURE_ANIMATION: 0x40,
  ANGULAR_VELOCITY: 0x80,
  NAME: 0x100,
  MEDIA_URL: 0x200
}

class Reader {
  constructor (type, flag, preset) {
    this.type = type
    this.flag = flag
    this.preset = preset
  }

  read (buffer, flags) {
    if (this.flag && !(flags & this.flag)) {
      return this.preset
    }

    return buffer.read(this.type)
  }
}


const CompressedObjectProperties = new Collection([
  ['type', Types.U8],
  ['state', Types.U8],
  ['crc', Types.U32],
  ['material', Types.U8],
  ['action', Types.U8],
  ['scale', Types.Vector3],
  ['position', Types.Vector3],
  ['rotation', Types.Vector3],
  ['flags', Types.U32],
  ['owner', Types.UUID],
  ['velocity.angular', new Reader(Types.Vector3, Flags.ANGULAR_VELOCITY)],
  ['parent', new Reader(Types.U32, Flags.PARENT)],
  ['tree', new Reader(Types.U8, Flags.TREE_TYPE)],
  ['data', new Reader(Types.Variable1, Flags.SCRATCH_PAD)],
  ['text.value', new Reader(Types.Text, Flags.TEXT_DATA)],
  ['text.color', new Reader(Types.U32, Flags.TEXT)]
])

// ['media.url', new Reader(Types.Text, Flags.MEDIA_URL)],
// ['particles', new Reader(Types.ParticleData, Flags.PARTICALS)],
// ['parameters', Types.Variable1],
// ['sound.key', new Reader(Types.UUID, Flags.SOUND_DATA)],
// ['sound.gain', new Reader(Types.U32, Flags.SOUND_DATA)],
// ['sound.flags', new Reader(Types.U8, Flags.SOUND_DATA)],
// ['sound.radius', new Reader(Types.U32, Flags.SOUND_DATA)],
// ['name', new Reader(Types.Text, Flags.NAME)],
// ['path.curve', Types.U8],
// ['path.begin', Types.U16],
// ['path.end', Types.U16],
// ['path.scale.x', Types.U8],
// ['path.scale.y', Types.U8],
// ['path.shear.x', Types.U8],
// ['path.shear.y', Types.U8],
// ['path.twist.length', Types.S8],
// ['path.twist.begin', Types.S8],
// ['path.radius.offset', Types.S8],
// ['path.taper.y', Types.S8],
// ['path.taper.x', Types.S8],
// ['path.revolutions', Types.U8],
// ['path.skew', Types.S8],
// ['profile.curve', Types.U8],
// ['profile.begin', Types.U16],
// ['profile.end', Types.U16],
// ['profile.hollow', Types.U16],
// ['textures', Types.Variable4],
// ['animation', new Reader(Types.U32, Flags.TEXTURE_ANIMATION)]

class ObjectUpdateCompressed extends Delegate {
  async handle (packet) {
    const handle = packet.data.regionData[0].regionHandle
    const region = this.region(handle)

    if (!region) {
      throw Error(Constants.Errors.UNEXPECTED_OBJECT_UPDATE)
    }

    for (const data of packet.data.objectData) {
      const buffer = new PacketBuffer(data.data, true)
      const flags = data.updateFlags
      const key = buffer.read(Types.UUID)
      const id = buffer.read(Types.U32)
      const entity = region.objects.get(id)

      if (entity) {
        this.update(entity, buffer)
        entity.flags |= flags
      } else {
        this.insert(id, key, buffer, flags, region)
      }
    }
  }

  async update (entity, buffer) {
    let flags = Flags.NONE

    for (const [key, type] of CompressedObjectProperties) {
      const value = type instanceof Reader
        ? type.read(buffer, flags)
        : buffer.read(type)

      if (value === undefined) {
        continue
      }

      switch (key) {
        case 'velocity.angular':
        case 'data':
          // Ignored values, for now.
          break

        case 'text.value':
        case 'text.color':
          if (!entity.text) {
            entity.text = {}
          }

          entity.text[key] = value
          break

        default:
          entity[key] = value
          break
      }
    }

    return entity
  }

  async insert (id, key, buffer, flags, region) {
    const entity = new Entity(this.client, await this.update({ id: id, key: key, flags: flags }, buffer))

    // Pass to entity collection.
    region.objects.set(entity.id, entity)

    return entity
  }
}

export default ObjectUpdateCompressed
