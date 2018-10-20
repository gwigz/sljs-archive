class F64 {
  public static size: number = 8

  /**
   * Converts number input into a buffer representing an 64-bit float.
   *
   * @param {number} float Number/float to convert
   * @returns {Buffer}
   */
  public static toBuffer(float: number): Buffer {
    const buffer = Buffer.allocUnsafe(this.size)

    buffer.writeDoubleLE(float, 0)

    return buffer
  }

  /**
   * Converts buffer input into an number which was representing an 64-bit
   * float.
   *
   * @param {Buffer} buffer Buffer to convert
   * @param {number} position Position to read from
   * @returns {number}
   */
  public static fromBuffer(buffer: Buffer, position: number = 0): number {
    return buffer.readDoubleLE(position)
  }
}

export default F64
