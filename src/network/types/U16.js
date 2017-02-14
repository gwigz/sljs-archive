class U16 {
  static size = 2

  /**
   * Converts integer input into a buffer representing an 16-bit unsigned
   * integer.
   *
   * @param {integer} integer Integer to convert
   * @returns {Buffer}
   */
  static toBuffer (integer) {
    const buffer = Buffer.allocUnsafe(this.size)

    buffer.writeUInt16LE(integer, 0)

    return buffer
  }

  /**
   * Converts buffer input into an integer which was representing an 16-bit
   * unsigned integer.
   *
   * @param {Buffer} buffer Buffer to convert
   * @returns {integer}
   */
  static fromBuffer (buffer) {
    return buffer.readUInt16LE(buffer, 0)
  }
}

export default U16
