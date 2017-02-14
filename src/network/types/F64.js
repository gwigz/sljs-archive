class F64 {
  static size = 8

  /**
   * Converts number input into a buffer representing an 64-bit float.
   *
   * @param {number} float Number/float to convert
   * @returns {Buffer}
   */
  static toBuffer (float) {
    const buffer = Buffer.allocUnsafe(this.size)

    buffer.writeDoubleLE(float, 0)

    return buffer
  }

  /**
   * Converts buffer input into an number which was representing an 64-bit
   * float.
   *
   * @param {Buffer} buffer Buffer to convert
   * @returns {number}
   */
  static fromBuffer (buffer) {
    return buffer.readDoubleLE(buffer, 0)
  }
}

export default F64
