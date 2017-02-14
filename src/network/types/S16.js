class S16 {
  static size = 2

  /**
   * Converts integer input into a buffer representing an 16-bit signed integer.
   *
   * @param {integer} integer
   * @return {Buffer}
   */
  static toBuffer (integer) {
    const buffer = Buffer.allocUnsafe(this.size)

    buffer.writeInt16LE(integer, 0)

    return buffer
  }

  /**
   * Converts buffer input into an integer which was representing an 16-bit
   * signed integer.
   *
   * @param {Buffer} buffer
   * @return {integer}
   */
  static fromBuffer (buffer) {
    return buffer.readInt16LE(buffer, 0)
  }
}

export default S16
