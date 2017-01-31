const Long = require('long');

class PacketBuffer {
  constructor(buffer) {
    this.buffer = buffer;
    this.position = 0;
  }

  get zerocoded() {
    return !!(this.buffer[0] & 0x80);
  }

  get reliable() {
    return !!(this.buffer[0] & 0x40);
  }

  get frequency() {
    if (this.buffer[6] !== 0xFF) {
      return 2;
    } else if (this.buffer[7] !== 0xFF) {
      return 1;
    } else if (this.buffer[8] !== 0xFF) {
      return 0;
    } else {
      return 3;
    }
  }

  get id() {
    // idk if there's a math thing to push a digit to the end of a number?
    if (this.buffer[6] !== 0xFF) {
      return +`${this.buffer[6]}2`;
    } else if (this.buffer[7] !== 0xFF) {
      return +`${this.buffer[7]}1`;
    } else if (this.buffer[8] !== 0xFF) {
      return +`${this.buffer.readUInt16BE(8)}0`;
    } else {
      return +`${this.buffer[9]}3`;
    }
  }

  get sequence() {
    return this.buffer[1] << 24 | this.buffer[2] << 16 | this.buffer[3] << 8 | this.buffer[4];
  }

  clean() {
    if (!this.zerocoded) {
      return;
    }

    const buffer = this.buffer;
    const length = buffer.length;

    let position = 6;
    let output = [];

    // Fetch most of the packet headers normally.
    for (let i = 0; i < 6; i++) {
      output.push(buffer[i]);
    }

    // Clean the rest.
    for (let i = position; i < length; i++) {
      if (buffer[i] === 0x00) {
        for (let j = 0; j < buffer.readUInt8(i + 1); j++) {
          output[position++] = 0x00;
        }

        i++;
      } else {
        output[position++] = buffer[i];
      }
    }

    this.buffer = new Buffer(output);
  }

  restart() {
    // Calculate base header byte size.
    this.position = 6 + this.buffer.readUInt8(5);

    // Add additional length dependant on frequency.
    switch (this.frequency) {
      case 3:
      case 0:
        this.position += 4;
        break;

      case 1:
        this.position += 2;
        break;

      case 2:
        this.position += 1;
        break;
    }
  }

  read(type) {
    switch (type) {
      case 'BOOL':
        return !!this.integer('U', 8);

      case 'F32':
        return this.integer('F', 32);

      case 'F64':
        return this.integer('F', 64);

      case 'S8':
        return this.integer('S', 8);

      case 'S16':
        return this.integer('S', 16);

      case 'S32':
        return this.integer('S', 32);

      case 'S64':
        return this.integer('S', 64);

      case 'U8':
        return this.integer('U', 8);

      case 'U16':
        return this.integer('U', 16);

      case 'U32':
        return this.integer('U', 32);

      case 'U64':
        return this.integer('U', 64);

      case 'LLUUID':
        return this.uuid();

      case 'Variable1':
        return this.variable(1);

      case 'Variable2':
        return this.variable(2);

      case 'Text':
        return this.text();

      case 'LLVector3':
        return [this.integer('F', 32), this.integer('F', 32), this.integer('F', 32)];

      case 'LLVector3d':
        // TODO: Implement LLVector3d type.
        console.error(`UNHANDLED LLVector3d in ${this.id}`);
        return [];

      case 'LLVector4':
        return [this.integer('F', 32), this.integer('F', 32), this.integer('F', 32), this.integer('F', 32)];

      case 'LLQuaternion':
        return [this.integer('F', 32), this.integer('F', 32), this.integer('F', 32), 0];
    }

    console.log(type, typeof type);

    // TODO: Implement Fixed type.
    if (typeof type === 'string' && type.indexOf('Fixed') === 0) {
      this.position += parseInt(type.substr(5));
    }

    console.error(`UNHANDLED ${type} in ${this.id}`);

    return 'Unparsed';
  }

  integer(type, bits) {
    let position = this.position;

    // Push position forwards by X bytes.
    this.position += bits / 8;

    switch (bits) {
      case 8:
        if (type === 'U') {
          return this.buffer.readUInt8(position);
        } else if (type === 'S') {
          return this.buffer.readInt8(position);
        }
        break;

      case 16:
        if (type === 'U') {
          return this.buffer.readUInt16LE(position);
        } else if (type === 'S') {
          return this.buffer.readInt16LE(position);
        }
        break;

      case 32:
        if (type === 'U') {
          return this.buffer.readUInt32LE(position);
        } else if (type === 'S') {
          return this.buffer.readInt32LE(position);
        } else if (type === 'F') {
          return this.buffer.readFloatLE(position);
        }
        break;

      case 64:
        if (type === 'F') {
          return this.buffer.readDoubleLE(position);
        } else if (type === 'U') {
          let buffer = this.buffer.slice(position, position + 8);
          let value = [];

          // ntohl?
          for (let i = 7; i >= 0; i--) {
            value.push(buffer[i]);
          }

          return new Long(new Buffer(value));
        }
        break;
    }

    return 0;
  }

  uuid() {
    let output = '';

    for (let c = 0; c < 16; c++) {
      // Position is adjusted here, by integer method.
      output += PacketBuffer.fill(this.integer('U', 8).toString(16), 2);

      if (c === 3 || c === 5 || c === 7 || c === 9) {
        output += '-';
      }
    }

    return output;
  }

  variable(length) {
    const bytes = this.integer('U', 8 * length);
    const buffer = this.buffer.slice(this.position, this.position + bytes);

    this.position += bytes;

    return buffer.toString('utf8', 0, buffer.length - 1);
  }

  text() {
    let byte = 0x00;
    let bytes = [];

    do {
      byte = this.buffer[this.position++];
      bytes.push(byte);
    } while (byte !== 0x00);

    bytes.pop();

    return new Buffer(bytes).toString('utf8');
  }

  static fill(value, width) {
    width -= value.toString().length;

    return width > 0
      ? new Array(width + (/\./.test(value) ? 2 : 1)).join('0') + value
      : `${value}`;
  }
}

module.exports = PacketBuffer;
