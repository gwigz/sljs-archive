import Long from 'long'

class U64 {
  static size = 8

  /**
   * Converts Long input into a buffer representing an 64-bit unsigned integer.
   *
   * @param {Long} integer Integer to convert
   * @returns {Buffer}
   */
  static toBuffer (integer) {
    const buffer = Buffer.allocUnsafe(this.size)

    if (integer instanceof Long) {
      buffer.writeInt32LE(integer.low, 0)
      buffer.writeInt32LE(integer.high, 4)
    } else {
      // TODO: ...allow input of less than safe max integer types here.
    }

    return buffer
  }

  /**
   * Converts buffer input into a Long which was representing an 64-bit unsigned
   * integer.
   *
   * @param {Buffer} buffer Buffer to convert
   * @param {integer} position Position to read from
   * @returns {Long}
   */
  static fromBuffer (buffer, position = 0) {
    return new Long(
      buffer.readInt32LE(position),
      buffer.readInt32LE(position + 4)
    )
  }
}

export default U64
