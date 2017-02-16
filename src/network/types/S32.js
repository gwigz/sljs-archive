class S16 {
  static size = 4

  /**
   * Converts integer input into a buffer representing an 32-bit signed integer.
   *
   * @param {integer} integer Integer to convert
   * @returns {Buffer}
   */
  static toBuffer (integer) {
    const buffer = Buffer.allocUnsafe(this.size)

    buffer.writeInt32LE(integer, 0)

    return buffer
  }

  /**
   * Converts buffer input into an integer which was representing an 32-bit
   * signed integer.
   *
   * @param {Buffer} buffer Buffer to convert
   * @param {integer} position Position to read from
   * @returns {integer}
   */
  static fromBuffer (buffer, position = 0) {
    return buffer.readInt32LE(buffer, position)
  }
}

export default S16
