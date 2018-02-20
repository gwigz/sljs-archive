import * as Long from 'long'

class U64 {
  public readonly static size: number = 8

  /**
   * Converts Long input into a buffer representing an 64-bit unsigned integer.
   *
   * @param {Long} integer Integer to convert
   * @returns {Buffer}
   */
  public static toBuffer (integer: number): Buffer {
    const buffer = Buffer.allocUnsafe(this.size)

    if (!(integer instanceof Long)) {
      integer = Long.fromNumber(integer, true)
    }

    buffer.writeInt32LE(integer.low, 0)
    buffer.writeInt32LE(integer.high, 4)

    return buffer
  }

  /**
   * Converts buffer input into a Long which was representing an 64-bit unsigned
   * integer.
   *
   * @param {Buffer} buffer Buffer to convert
   * @param {number} position Position to read from
   * @returns {Long}
   */
  public static fromBuffer (buffer: Buffer, position = 0): number {
    return Long.fromBits(
      buffer.readInt32LE(position),
      buffer.readInt32LE(position + 4),
      true
    )
  }
}

export default U64
