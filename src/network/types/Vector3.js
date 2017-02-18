class Vector3 {
  static size = 12

  /**
   * Converts array input into a buffer representing a 3 point vector.
   *
   * @param {number[]} vector Should contain 3 values
   * @returns {Buffer}
   */
  static toBuffer (vector) {
    const buffer = Buffer.allocUnsafe(this.size)

    buffer.writeFloatLE(vector[0], 0)
    buffer.writeFloatLE(vector[1], 4)
    buffer.writeFloatLE(vector[2], 8)

    return buffer
  }

  /**
   * Converts buffer input into an array of float values representing a 3 point
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
      buffer.readFloatLE(position + 8)
    ]
  }
}

export default Vector3
