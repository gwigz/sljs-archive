const Constants = require('../../../utilities/Constants');
const BufferList = require('bl');

class Packet {
  constructor(data) {
    this.setup(data);
  }

  setup(data) {
    this.id = data.id;
    //this.name = data.name || undefined;
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

    // Initiate buffer with packet header...
    const buffer = new BufferList(new Buffer([
      0x00, // Packet flags, see: http://wiki.secondlife.com/wiki/Packet_Layout
      number >> 24, // Packet sequence number, given to us by the UDP client.
      number >> 16,
      number >> 8,
      number,
      0x00 // Extra header bytes, in this case it's always zero, for now?
    ]));

    if (format.frequency != 2) { // high
      buffer.append(Buffer.from([0xFF]));

      if (format.frequency != 1) { // medium
        buffer.append(Buffer.from([0xFF]));
      }

      if (format.frequency == 0) { // low
        buffer.append(Buffer.from([(format.number >> 8) & 0xFF]));
      } else if (format.frequency == 3) { // fixed
        buffer.append(Buffer.from([0xFF]));
      }
    }

    buffer.append(Buffer.from([format.number & 0xFF]));

    for (let block of format.requirements) {
      if (!parameters.hasOwnProperty(block.name)) {
        console.error('Whoops, creating PKID ' + this.id + ' missing block ' + block.name);
        return;
      }

      // Hack for single blocks.
      if (parameters[block.name].constructor !== Array) {
        parameters[block.name] = [parameters[block.name]];
      }

      /*if (block.quantity && block.quantity != parameters[block.name].length) {
        console.error('Whoops, incorrect number of parameters for block ' + block.name);
      }*/

      // Append length of packet if quantity is variable.
      if (typeof block.quantity === 'undefined') {
        var byte = Buffer.alloc(1);
        byte.writeUInt8(parameters[block.name].length, 0);

        // There's probably a better way to add an "8 bit unsigned integer".
        buffer.append(byte);
      }

      for (let input of parameters[block.name]) {
        for (let parameter of block.parameters) {
          if (!input.hasOwnProperty(parameter.name)) {
            // Maybe try and fill the agentData block, if possible?
            /*if (parameters.name === 'agentData') {
              input.agentData = {};
            } else {*/

            console.error('Whoops, creating PKID ' + this.id + ' missing parameter ' + parameter.name);
            return;
          }

          let value = input[parameter.name];

          switch (parameter.type) {
            case 'BOOL':
              buffer.append(Buffer.from([(value | 0) & 0xFF]));
              break;

            case 'F32':
              var bytes = Buffer.alloc(4);
              bytes.writeFloatLE(value, 0);
              buffer.append(bytes); // BE?
              break;

            case 'F64':
              var bytes = Buffer.alloc(8);
              bytes.writeDoubleLE(value, 0);
              buffer.append(bytes);
              break;

            case 'S8':
              var byte = Buffer.alloc(1);
              byte.writeInt8(value, 0);
              buffer.append(byte);
              break;

            case 'S16':
              var bytes = Buffer.alloc(2);
              bytes.writeInt16LE(value, 0);
              buffer.append(bytes);
              break;

            case 'S32':
              var bytes = Buffer.alloc(4);
              bytes.writeInt32LE(value, 0);
              buffer.append(bytes);
              break;

            case 'U8':
              var byte = Buffer.alloc(1);
              byte.writeUInt8(value, 0);
              buffer.append(byte);
              break;

            case 'U16':
              var bytes = Buffer.alloc(2);
              bytes.writeUInt16LE(value, 0);
              buffer.append(bytes); // BE?
              break;

            case 'U32':
              var bytes = Buffer.alloc(4);
              bytes.writeUInt32LE(value, 0);
              buffer.append(bytes);
              break;

            case 'U64':
              var bytes = [];
              let octets = value.toOctetString(' ').split(' ');

              for (i = 7; i >= 0; i--) {
                buffer[7 - i] = parseInt(octets[i], 16);
              }

              buffer.append(Buffer.from(bytes));
              break;

            case 'LLVector3':
              var bytes = Buffer.alloc(12);
              bytes.writeFloatLE(value[0], 0);
              bytes.writeFloatLE(value[1], 4);
              bytes.writeFloatLE(value[2], 8);
              buffer.append(bytes);
              break;

            case 'LLVector3d':
              break;

            case 'LLVector4':
              var bytes = Buffer.alloc(16);
              bytes.writeFloatLE(value[0], 0);
              bytes.writeFloatLE(value[1], 4);
              bytes.writeFloatLE(value[2], 8);
              bytes.writeFloatLE(value[3], 12);
              buffer.append(bytes);
              break;

            case 'LLUUID':
              let parts = value.split('-');
              var bytes = [];

              for (let part of parts) {
                for (var c = 0; c < part.length; c += 2) {
                  bytes.push(parseInt(part.substr(c, 2), 16));
                }
              }

              buffer.append(Buffer.from(bytes));
              break;

            case 'LLQuaternion':
              var bytes = Buffer.alloc(16);
              bytes.writeFloatLE(value[0], 0);
              bytes.writeFloatLE(value[1], 4);
              bytes.writeFloatLE(value[2], 8);
              bytes.writeFloatLE(value[3] || 0, 12);
              buffer.append(bytes);
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

    return buffer.copy();
  }
}

module.exports = Packet;
