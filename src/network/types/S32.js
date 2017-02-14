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
   * @returns {integer}
   */
  static fromBuffer (buffer) {
    return buffer.readInt32LE(buffer, 0)
  }
}

export default S16
