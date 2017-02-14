class U32 {
  static size = 4

  /**
   * Converts integer input into a buffer representing an 32-bit unsigned
   * integer.
   *
   * @param {integer} integer
   * @return {Buffer}
   */
  static toBuffer (integer) {
    const buffer = Buffer.allocUnsafe(this.size)

    buffer.writeUInt32LE(integer, 0)

    return buffer
  }

  /**
   * Converts buffer input into an integer which was representing an 32-bit
   * unsigned integer.
   *
   * @param {Buffer} buffer
   * @return {integer}
   */
  static fromBuffer (buffer) {
    return buffer.readUInt32LE(buffer, 0)
  }
}

export default U32
