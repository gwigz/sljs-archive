const ONE_OVER_U16_MAX = 1.0 / 65535

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
   * @param {integer} position Position to read from
   * @returns {integer}
   */
  static fromBuffer (buffer, position = 0) {
    return buffer.readUInt16LE(position)
  }

  /**
   * Converts a 16-bit unsigned integer to a floating point number, to a certian
   * degree of accuracy.
   *
   * @param {number} value U16 wide number to convert
   * @param {number} lower Lower limit for convertion
   * @param {number} upper Upper limit for convertion
   * @returns {number} Float value, will return 0.0 if delta is reached
   */
  static toFloat (value, lower, upper) {
    const float = value * ONE_OVER_U16_MAX

    if (Math.abs(float) < ((upper - lower) * ONE_OVER_U16_MAX)) {
      return 0.0
    }

    return float
  }
}

export default U16
