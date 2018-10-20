class Boolean {
  public static readonly size: number = 1

  /**
   * Converts boolean input into a buffer representing an 8-bit unsigned
   * boolean.
   *
   * @param {boolean|number} boolean Boolean to convert
   * @returns {Buffer}
   */
  public static toBuffer(boolean: boolean | number): Buffer {
    const buffer = Buffer.allocUnsafe(this.size)

    buffer.writeUInt8(Number(boolean), 0)

    return buffer
  }

  /**
   * Converts buffer input into an boolean which was representing an 8-bit
   * unsigned boolean.
   *
   * @param {Buffer} buffer Buffer to convert
   * @param {number} position Position to read from
   * @returns {boolean}
   */
  public static fromBuffer(buffer: Buffer, position: number = 0): boolean {
    return !!buffer.readUInt8(position)
  }
}

export default Boolean
