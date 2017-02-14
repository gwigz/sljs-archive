class Quaternion {
  static size = 12

  /**
   * Converts array input into a buffer representing a quaternion.
   *
   * @param {number[]} quaternion Should contain 4 values
   * @returns {Buffer}
   */
  static toBuffer (quaternion) {
    const buffer = Buffer.allocUnsafe(this.size)

    if (quaternion[3] >= 0.0) {
      buffer.writeFloatLE(quaternion[0], 0)
      buffer.writeFloatLE(quaternion[1], 4)
      buffer.writeFloatLE(quaternion[2], 8)
    } else {
      buffer.writeFloatLE(-quaternion[0], 0)
      buffer.writeFloatLE(-quaternion[1], 4)
      buffer.writeFloatLE(-quaternion[2], 8)
    }

    return buffer
  }

  /**
   * Converts buffer input into an array of float values representing a
   * normalized quaternion.
   *
   * @param {Buffer} buffer Buffer to convert
   * @returns {number[]}
   */
  static fromBuffer (buffer) {
    const quaternion = [
      buffer.readFloatLE(0),
      buffer.readFloatLE(4),
      buffer.readFloatLE(8),
      0.0
    ]

    if (buffer.length === this.size) {
      const w = 1.0 - (
        (quaternion[0] * quaternion[0])
        + (quaternion[1] * quaternion[1])
        + (quaternion[2] * quaternion[2])
      )

      if (w > 0.0) {
        quaternion[3] = Math.sqrt(w)
      }
    } else {
      quaternion[3] = buffer.readFloatLE(12)
    }

    return quaternion
  }
}

export default Quaternion
