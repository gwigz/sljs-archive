class S8 {
  public static readonly size: number = 1

  /**
   * Converts integer input into a buffer representing an 8-bit signed integer.
   *
   * @param {number} integer Integer to convert
   * @returns {Buffer}
   */
  public static toBuffer (integer: number): Buffer {
    const buffer = Buffer.allocUnsafe(this.size)

    buffer.writeInt8(integer, 0)

    return buffer
  }

  /**
   * Converts buffer input into an integer which was representing an 8-bit
   * signed integer.
   *
   * @param {Buffer} buffer Buffer to convert
   * @param {number} position Position to read from
   * @returns {number}
   */
  public static fromBuffer (buffer: Buffer, position: number = 0): number {
    return buffer.readInt8(position)
  }
}

export default S8
