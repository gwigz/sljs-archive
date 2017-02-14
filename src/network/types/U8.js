class U8 {
  static size = 1

  /**
   * Converts integer input into a buffer representing an 8-bit unsigned
   * integer.
   *
   * @param {integer} integer Integer to convert
   * @returns {Buffer}
   */
  static toBuffer (integer) {
    const buffer = Buffer.allocUnsafe(this.size)

    buffer.writeUInt8(integer, 0)

    return buffer
  }

  /**
   * Converts buffer input into an integer which was representing an 8-bit
   * unsigned integer.
   *
   * @param {Buffer} buffer Buffer to convert
   * @returns {integer}
   */
  static fromBuffer (buffer) {
    return buffer.readUInt8(buffer, 0)
  }
}

export default U8
