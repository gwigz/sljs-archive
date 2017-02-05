const BufferList = require('bl')
const Long = require('long')

class Packet {
  constructor(data) {
    this.setup(data)
  }

  setup(data) {
    this.id = data.id
    this.reliable = data.reliable || false
    this.number = data.number || undefined
    this.parameters = data.parameters || null
  }

  static create(id, parameters) {
    // TODO: Read `...args`, parse either buffer or `id` + `parameters`
    return new this({
      id: id,
      parameters: parameters,
      reliable: false
    })
  }

  static parse(buffer) {
    // Dezero if we need too, depending on the packets header flag.
    buffer.clean()

    return new this({
      id: buffer.id,
      number: buffer.sequence,
      reliable: buffer.reliable
    })
  }

  read(buffer, format) {
    // If we have no format, don't attempt to parse any further.
    if (!(format && format.requirements && format.requirements.length)) {
      return
    }

    this.parameters = {}

    // Notify our buffer set our start position, this will be after the
    // packet header.
    buffer.restart()

    // TODO: Handle this better.
    try {
      for (const block of format.requirements) {
        const quantity = block.quantity ? block.quantity : buffer.read('U8')

        // Prepare an array for containing block content.
        this.parameters[block.name] = []

        // Loop through block dependant on quantity value.
        for (let i = 0; i < quantity; i++) {
          const parameters = {}

          // Fetch block parameters.
          for (const parameter of block.parameters) {
            // Read in type, buffer position is automatically adjusted here.
            parameters[parameter.name] = buffer.read(parameter.type)
          }

          this.parameters[block.name].push(parameters)
        }
      }
    } catch (error) {
      console.error(error, `${this.id} failed to process, whoops...`)
    }
  }

  buffer(handler, number) {
    // TODO: Move all of the buffer related parts here into PacketBuffer
    // instead, and maybe remove BufferList dependancy while doing so, as all of
    // the below is all just passing of buffer objects...
    const format = handler.format(this)
    const parameters = this.parameters

    if (typeof format === 'undefined') {
      // Throw error or something?
      return null
    }

    // Initiate buffer with packet header.
    // http://wiki.secondlife.com/wiki/Packet_Layout
    const buffer = new BufferList(Buffer.from([
      0x00,
      number >> 24,
      number >> 16,
      number >> 8,
      number,
      0x00
    ]))

    if (format.frequency !== 2) {
      buffer.append(Buffer.from([0xFF]))

      if (format.frequency !== 1) {
        buffer.append(Buffer.from([0xFF]))
      }

      if (format.frequency === 0) {
        buffer.append(Buffer.from([(format.number >> 8) & 0xFF]))
      } else if (format.frequency === 3) {
        buffer.append(Buffer.from([0xFF]))
      }
    }

    buffer.append(Buffer.from([format.number & 0xFF]))

    for (const block of format.requirements) {
      if (!parameters.hasOwnProperty(block.name)) {
        console.error(`Whoops, creating PKID ${this.id} missing block ${block.name}`)
        return null
      }

      // Hack for single blocks.
      if (parameters[block.name].constructor !== Array) {
        parameters[block.name] = [parameters[block.name]]
      }

      // Append length of packet if quantity is variable.
      if (typeof block.quantity === 'undefined') {
        buffer.append(this.integer('U', 8, parameters[block.name].length))
      }

      // Parse type, append value to buffer.
      for (const input of parameters[block.name]) {
        for (const parameter of block.parameters) {
          if (!input.hasOwnProperty(parameter.name)) {
            console.error(`Whoops, creating PKID ${this.id} missing parameter ${parameter.name}`)
            return null
          }

          this.append(buffer, parameter.type, input[parameter.name])
        }
      }
    }

    return buffer.copy()
  }

  append(buffer, type, value) {
    switch (type) {
      case 'BOOL':
        return buffer.append(Buffer.from([(value | 0) & 0xFF]))

      case 'F32':
        return buffer.append(this.integer('F', 32, value))

      case 'F64':
        return buffer.append(this.integer('F', 64, value))

      case 'S8':
        return buffer.append(this.integer('S', 8, value))

      case 'S16':
        return buffer.append(this.integer('S', 16, value))

      case 'S32':
        return buffer.append(this.integer('S', 32, value))

      case 'U8':
        return buffer.append(this.integer('U', 8, value))

      case 'U16':
        return buffer.append(this.integer('U', 16, value))

      case 'U32':
        return buffer.append(this.integer('U', 32, value))

      case 'U64':
        return buffer.append(this.u64(value))

      case 'LLVector3':
        return buffer.append(this.vector3(value))

      case 'LLVector3d':
        return buffer.append(this.vector3d(value))

      case 'LLVector4':
        return buffer.append(this.vector4(value))

      case 'LLUUID':
        return buffer.append(this.uuid(value))

      case 'LLQuaternion':
        return buffer.append(this.quaternion(value))

      case 'Variable1':
        return buffer.append(this.variable(1, value))

      case 'Variable2':
        return buffer.append(this.variable(2, value))
    }

    if (type.indexOf('Fixed') === 0) {
      return buffer.append(this.fixed(Number(type.substr(5)), value))
    }

    return null
  }

  integer(type, bits, value) {
    let buffer = Buffer.alloc(bits / 8)

    switch (type) {
      case 'F':
        if (bits === 32) {
          buffer.writeFloatLE(value, 0)
        } else {
          buffer.writeDoubleLE(value, 0)
        }
        break

      case 'S':
        if (bits === 8) {
          buffer.writeInt8(value, 0)
        } else if (bits === 16) {
          buffer.writeInt16LE(value, 0)
        } else {
          buffer.writeInt32LE(value, 0)
        }
        break

      case 'U':
        if (bits === 8) {
          buffer.writeUInt8(value, 0)
        } else if (bits === 16) {
          buffer.writeUInt16LE(value, 0)
        } else if (bits === 32) {
          buffer.writeUInt32LE(value, 0)
        } else if (value instanceof Long) {
          buffer.writeInt32LE(value.low, 0)
          buffer.writeInt32LE(value.high, 4)
        } else {
          buffer.writeDoubleLE(value)
        }
        break
    }

    return buffer
  }

  vector3(value) {
    let buffer = Buffer.alloc(12)

    buffer.writeFloatLE(value[0], 0)
    buffer.writeFloatLE(value[1], 4)
    buffer.writeFloatLE(value[2], 8)

    return buffer
  }

  vector3d(value) {
    let buffer = Buffer.alloc(24)

    buffer.writeDoubleLE(value[0], 0)
    buffer.writeDoubleLE(value[1], 8)
    buffer.writeDoubleLE(value[2], 16)

    return buffer
  }

  vector4(value) {
    let bytes = Buffer.alloc(16)

    bytes.writeFloatLE(value[0], 0)
    bytes.writeFloatLE(value[1], 4)
    bytes.writeFloatLE(value[2], 8)
    bytes.writeFloatLE(value[3], 12)

    return bytes
  }

  uuid(value) {
    let bytes = []
    let parts = value.split('-')

    for (const part of parts) {
      for (let c = 0; c < part.length; c += 2) {
        bytes.push(parseInt(part.substr(c, 2), 16))
      }
    }

    return Buffer.from(bytes)
  }

  quaternion(value) {
    let bytes = Buffer.alloc(16)

    // TODO: This is probably wrong, needs converting.
    bytes.writeFloatLE(value[0], 0)
    bytes.writeFloatLE(value[1], 4)
    bytes.writeFloatLE(value[2], 8)
    bytes.writeFloatLE(value[3] || 0, 12)

    return bytes
  }

  variable(bytes, value) {
    if (value instanceof Buffer) {
      return value
    }

    const bits = 8 * bytes
    const max = 255 * bytes
    const buffer = Buffer.from(value, 'utf-8')
    const length = Math.min(max, buffer.length)

    return Buffer.concat([this.integer('U', bits, length), buffer.slice(0, length)])
  }

  fixed(length, value) {
    if (value instanceof Buffer) {
      return value
    }

    return Buffer.from(value, 'utf-8')
  }
}

module.exports = Packet
