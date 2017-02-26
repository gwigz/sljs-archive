import F32 from './F32'

class Vector3 {
  static size = 12
  static zero = [0.0, 0.0, 0.0]

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
   * @param {Type} type Optional type overwrite
   * @param {number} lower Lower limit for optional type convertion
   * @param {number} upper Upper limit for optional type convertion
   * @returns {number[]}
   */
  static fromBuffer (buffer, position = 0, type = F32, lower, upper) {
    const output = [
      type.fromBuffer(buffer, position),
      type.fromBuffer(buffer, position + type.size),
      type.fromBuffer(buffer, position + (type.size * 2))
    ]

    if (type.toFloat instanceof Function) {
      return output.map(value => type.toFloat(value, lower, upper))
    }

    return output
  }

  /**
   * Calculates the distance between two three wide number vectors.
   *
   * @param {number[]} from Position to calculate distance from
   * @param {number[]} to Position to calculate distance to
   * @returns {number}
   */
  static distance (from, to) {
    const dx = from[0] - to[0]
    const dy = from[1] - to[1]
    const dz = from[2] - to[2]

    return Math.sqrt((dx * dx) + (dy * dy) + (dz * dz))
  }
}

export default Vector3
