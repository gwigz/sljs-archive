class UUID {
  static size = 16
  static zero = '00000000-0000-0000-0000-000000000000'

  /**
   * Converts string input into a buffer representing a UUID.
   *
   * @todo Optimize this, it's probably not that good
   * @param {string} uuid UUID string to convert
   * @returns {Buffer}
   */
  static toBuffer (uuid) {
    const bytes = []
    const parts = uuid.split('-')

    for (const part of parts) {
      for (let c = 0; c < part.length; c += 2) {
        bytes.push(parseInt(part.substr(c, 2), 16))
      }
    }

    return Buffer.from(bytes)
  }

  /**
   * Converts buffer input into a UUID string.
   *
   * @todo Optimize this, it's probably not that good
   * @param {Buffer} buffer Buffer to convert
   * @param {integer} position Position to read from
   * @returns {string}
   */
  static fromBuffer (buffer, position = 0) {
    let output = ''

    for (let c = 0; c < 16; c++) {
      output += this.pad(buffer.readUInt8(position++).toString(16), 2)

      if (c === 3 || c === 5 || c === 7 || c === 9) {
        output += '-'
      }
    }

    return output
  }

  /**
   * Zero padding helper function, may be moved.
   *
   * @param {string} value Character to pad
   * @param {integer} width Number of characters to zero pad
   * @returns {string}
   */
  static pad (value, width) {
    width -= value.length

    return width > 0
      ? new Array(width + (/\./.test(value) ? 2 : 1)).join('0') + value
      : `${value}`
  }
}

export default UUID
