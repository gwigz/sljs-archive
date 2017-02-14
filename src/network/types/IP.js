class IP {
  static size = 1

  /**
   * Converts an IP address (string) input into a buffer, one place per byte, 4
   * bytes wide.
   *
   * @param {integer} integer
   * @return {Buffer}
   */
  static toBuffer (string) {
    const ip = string.split('.')
    const buffer = Buffer.allocUnsafe(this.size)

    buffer.writeUInt8(ip[0], 0)
    buffer.writeUInt8(ip[1], 1)
    buffer.writeUInt8(ip[2], 2)
    buffer.writeUInt8(ip[3], 3)

    return buffer
  }

  /**
   * Converts buffer input into a string representing an IP address
   *
   * @param {Buffer} buffer
   * @return {integer}
   */
  static fromBuffer (buffer) {
    return [
      buffer.readUInt8(buffer, 0),
      buffer.readUInt8(buffer, 1),
      buffer.readUInt8(buffer, 2),
      buffer.readUInt8(buffer, 3)
    ].join('.')
  }
}

export default IP
