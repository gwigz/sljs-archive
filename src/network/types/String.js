class String {
  /**
   * Converts a string to a buffer prefixed by length.
   *
   * @param {integer} size Prefix size
   * @param {string} value Limited length defined by
   * @returns {buffer}
   */
  static toPrefixedBuffer (size, value) {
    const max = (256 - size) * (size * 8)
    const buffer = value instanceof Buffer ? value : Buffer.from(value, 'utf-8')
    const length = Math.min(max, buffer.length)
    const prefix = Buffer.allocUnsafe(size)

    switch (size) {
      case 1:
        prefix.writeUInt8(length, 0)
        break

      case 2:
        prefix.writeUInt16LE(length, 0)
        break
    }

    return Buffer.concat([prefix, buffer.slice(0, length)])
  }

  /**
   * Converts buffer input into a string.
   *
   * @param {Buffer} buffer Buffer to convert
   * @param {integer} start Position to read from
   * @param {integer} end Position to end at
   * @returns {string}
   */
  static fromBuffer (buffer, start = 0, end = 0) {
    return buffer.toString('utf8', start, end || buffer.length)
  }
}

export default String
