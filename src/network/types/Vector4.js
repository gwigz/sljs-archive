class Vector4 {
  static size = 16

  /**
   * Converts array input into a buffer representing a 4 point vector.
   *
   * @param {number[]} vector Should contain 4 values
   * @returns {Buffer}
   */
  static toBuffer (vector) {
    const buffer = Buffer.allocUnsafe(this.size)

    buffer.writeFloatLE(vector[0], 0)
    buffer.writeFloatLE(vector[1], 4)
    buffer.writeFloatLE(vector[2], 8)
    buffer.writeFloatLE(vector[4], 12)

    return buffer
  }

  /**
   * Converts buffer input into an array of float values representing a 4 point
   * vector.
   *
   * @param {Buffer} buffer Buffer to convert
   * @param {integer} position Position to read from
   * @returns {number[]}
   */
  static fromBuffer (buffer, position = 0) {
    return [
      buffer.readFloatLE(position),
      buffer.readFloatLE(position + 4),
      buffer.readFloatLE(position + 8),
      buffer.readFloatLE(position + 12)
    ]
  }
}

export default Vector4
