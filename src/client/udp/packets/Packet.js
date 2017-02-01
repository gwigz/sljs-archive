const BufferList = require('bl');

class Packet {
  constructor(data) {
    this.setup(data);
  }

  setup(data) {
    this.id = data.id;
    this.reliable = data.reliable || false;
    this.number = data.number || undefined;
    this.parameters = data.parameters || null;
  }

  static create(id, parameters) {
    return new this({
      id: id,
      parameters: parameters
    });
  }

  static parse(handler, buffer) {
    // Dezero if we need too, depending on the packets header flag.
    buffer.clean();

    let packet = new Packet({
      id: buffer.id,
      number: buffer.sequence,
      reliable: buffer.reliable
    });

    let format = handler.format(packet);

    if (format
      && format.requirements
      && format.requirements.length
    ) {
      packet.parameters = {};

      // Notify our buffer set our start position, this will be after the
      // packet header.
      buffer.restart();

      for (let block of format.requirements) {
        packet.parameters[block.name] = {};

        for (let parameter of block.parameters) {
          // Read in type, buffer position is automatically adjusted here.
          packet.parameters[block.name][parameter.name] = buffer.read(parameter.type);
        }
      }
    }

    return packet;
  }

  buffer(handler, number) {
    // TODO: Move all of the buffer related parts here into PacketBuffer
    // instead, and maybe remove BufferList dependancy while doing so, as all of
    // the below is all just passing of buffer objects...
    const format = handler.format(this);
    const parameters = this.parameters;

    if (typeof format === 'undefined') {
      // Throw error or something?
      return;
    }

    // Initiate buffer with packet header.
    // http://wiki.secondlife.com/wiki/Packet_Layout
    const buffer = new BufferList(new Buffer([
      0x00,
      number >> 24,
      number >> 16,
      number >> 8,
      number,
      0x00
    ]));

    if (format.frequency !== 2) {
      buffer.append(Buffer.from([0xFF]));

      if (format.frequency !== 1) {
        buffer.append(Buffer.from([0xFF]));
      }

      if (format.frequency === 0) {
        buffer.append(Buffer.from([(format.number >> 8) & 0xFF]));
      } else if (format.frequency === 3) {
        buffer.append(Buffer.from([0xFF]));
      }
    }

    buffer.append(Buffer.from([format.number & 0xFF]));

    for (let block of format.requirements) {
      if (!parameters.hasOwnProperty(block.name)) {
        console.error(`Whoops, creating PKID ${this.id} missing block ${block.name}`);
        return;
      }

      // Hack for single blocks.
      if (parameters[block.name].constructor !== Array) {
        parameters[block.name] = [parameters[block.name]];
      }

      // Append length of packet if quantity is variable.
      if (typeof block.quantity === 'undefined') {
        buffer.append(this.integer('U', 8, parameters[block.name].length));
      }

      // Parse type, append value to buffer.
      for (let input of parameters[block.name]) {
        for (let parameter of block.parameters) {
          if (!input.hasOwnProperty(parameter.name)) {
            console.error(`Whoops, creating PKID ${this.id} missing parameter ${parameter.name}`);
            return;
          }

          const value = input[parameter.name];

          switch (parameter.type) {
            case 'BOOL':
              buffer.append(Buffer.from([(value | 0) & 0xFF]));
              break;

            case 'F32':
              buffer.append(this.integer('F', 32, value));
              break;

            case 'F64':
              buffer.append(this.integer('F', 64, value));
              break;

            case 'S8':
              buffer.append(this.integer('S', 8, value));
              break;

            case 'S16':
              buffer.append(this.integer('S', 16, value));
              break;

            case 'S32':
              buffer.append(this.integer('S', 32, value));
              break;

            case 'U8':
              buffer.append(this.integer('U', 8, value));
              break;

            case 'U16':
              buffer.append(this.integer('U', 16, value));
              break;

            case 'U32':
              buffer.append(this.integer('U', 32, value));
              break;

            case 'U64':
              buffer.append(this.u64(value));
              break;

            case 'LLVector3':
              buffer.append(this.vector3(value));
              break;

            case 'LLVector3d':
              break;

            case 'LLVector4':
              buffer.append(this.vector4(value));
              break;

            case 'LLUUID':
              buffer.append(this.uuid(value));
              break;

            case 'LLQuaternion':
              buffer.append(this.quaternion(value));
              break;

            case 'Variable1':
              buffer.append(value);
              break;

            case 'Variable2':
              buffer.append(value);
              break;
          }
        }
      }
    }
  }

  integer(type, bits, value) {
    let bytes = Buffer.alloc(bits / 8);

    switch (type) {
      case 'F':
        if (bits === 32) {
          bytes.writeFloatLE(value, 0);
        } else {
          bytes.writeDoubleLE(value, 0);
        }
        break;

      case 'S':
        if (bits === 8) {
          bytes.writeInt8(value, 0);
        } else if (bits === 16) {
          bytes.writeInt16LE(value, 0);
        } else {
          bytes.writeInt32LE(value, 0);
        }
        break;

      case 'U':
        if (bits === 8) {
          bytes.writeUInt8(value, 0);
        } else if (bits === 16) {
          bytes.writeUInt16LE(value, 0);
        } else if (bits === 32) {
          bytes.writeUInt32LE(value, 0);
        } else {
          bytes = this.u64(value);
        }
        break;
    }

    return Buffer.from(bytes);
  }

  u64(value) {
    let bytes = [];
    let octets = value.toOctetString(' ').split(' ');

    for (let i = 7; i >= 0; i--) {
      bytes[7 - i] = parseInt(octets[i], 16);
    }

    return Buffer.from(bytes);
  }

  vector3(value) {
    let bytes = Buffer.alloc(12);

    bytes.writeFloatLE(value[0], 0);
    bytes.writeFloatLE(value[1], 4);
    bytes.writeFloatLE(value[2], 8);

    return bytes;
  }

  vector4(value) {
    let bytes = Buffer.alloc(16);

    bytes.writeFloatLE(value[0], 0);
    bytes.writeFloatLE(value[1], 4);
    bytes.writeFloatLE(value[2], 8);
    bytes.writeFloatLE(value[3], 12);

    return bytes;
  }

  uuid(value) {
    let bytes = [];
    let parts = value.split('-');

    for (let part of parts) {
      for (let c = 0; c < part.length; c += 2) {
        bytes.push(parseInt(part.substr(c, 2), 16));
      }
    }

    return Buffer.from(bytes);
  }

  quaternion(value) {
    let bytes = Buffer.alloc(16);

    // TODO: This is probably wrong, needs converting.
    bytes.writeFloatLE(value[0], 0);
    bytes.writeFloatLE(value[1], 4);
    bytes.writeFloatLE(value[2], 8);
    bytes.writeFloatLE(value[3] || 0, 12);

    return bytes;
  }
}

module.exports = Packet;
