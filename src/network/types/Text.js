class Text {
  /**
   * Converts buffer input into an a subsection of the buffer, from position
   * till the next null/zero byte terminator.
   *
   * @param {Buffer} buffer Buffer to convert
   * @param {integer} position Position to read from
   * @returns {Buffer}
   */
  static fromBuffer (buffer, position = 0) {
    const bytes = []

    for (const byte of buffer.slice(position)) {
      if (byte === 0x00) {
        break
      }

      bytes.push(byte)
    }

    return Buffer.from(bytes)
  }
}

export default Text
