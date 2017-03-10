import F32 from './F32'

class Quaternion {
  static size = 12
  static zero = [0.0, 0.0, 0.0, 0.0]

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
   * @param {integer} position Position to read from
   * @param {boolean} normalized True if value is normalized
   * @param {Type} type Optional type overwrite
   * @param {number} lower Lower limit for optional type convertion
   * @param {number} upper Upper limit for optional type convertion
   * @returns {number[]}
   */
  static fromBuffer (buffer, position = 0, normalized = true, type = F32, lower, upper) {
    if (!type) {
      type = F32
    }

    const quaternion = [
      type.fromBuffer(buffer, position),
      type.fromBuffer(buffer, position + type.size),
      type.fromBuffer(buffer, position + (type.size * 2)),
      normalized ? 0.0 : type.fromBuffer(buffer, position + (type.size * 3))
    ]

    if (normalized) {
      const sum = 1
        - (quaternion[0] * quaternion[0])
        - (quaternion[1] * quaternion[1])
        - (quaternion[2] * quaternion[2])

      quaternion[3] = sum > 0.0 ? Math.sqrt(sum) : 0.0
    }

    if (type.toFloat instanceof Function) {
      return quaternion.map(value => type.toFloat(value, lower, upper))
    }

    return quaternion
  }
}

export default Quaternion
