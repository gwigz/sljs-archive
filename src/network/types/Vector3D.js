class Vector3D {
  static size = 24

  /**
   * Converts array input into a buffer representing a 3 point vector.
   *
   * @param {number[]} vector Should contain 3 values
   * @return {Buffer}
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
   * @param {Buffer} buffer
   * @return {number[]}
   */
  static fromBuffer (buffer) {
    return [
      buffer.readDoubleLE(0),
      buffer.readDoubleLE(8),
      buffer.readDoubleLE(16)
    ]
  }
}

export default Vector3D
