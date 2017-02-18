class Vector3D {
  static size = 24

  /**
   * Converts array input into a buffer representing a 3 point vector.
   *
   * @param {number[]} vector Should contain 3 values
   * @returns {Buffer}
   */
  static toBuffer (vector) {
    const buffer = Buffer.allocUnsafe(this.size)

    buffer.writeDoubleLE(vector[0], 0)
    buffer.writeDoubleLE(vector[1], 8)
    buffer.writeDoubleLE(vector[2], 16)

    return buffer
  }

  /**
   * Converts buffer input into an array of double values representing a 3 point
   * vector.
   *
   * @param {Buffer} buffer Buffer to convert
   * @param {integer} position Position to read from
   * @returns {number[]}
   */
  static fromBuffer (buffer, position = 0) {
    return [
      buffer.readDoubleLE(position),
      buffer.readDoubleLE(position + 8),
      buffer.readDoubleLE(position + 16)
    ]
  }
}

export default Vector3D
