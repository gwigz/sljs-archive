class UUID {
  public readonly static size: number = 16
  public readonly static zero: string = '00000000-0000-0000-0000-000000000000'

  /**
   * Converts string input into a buffer representing a UUID.
   *
   * @todo Optimize this, it's probably not that good
   * @param {string} uuid UUID string to convert
   * @returns {Buffer}
   */
  public static toBuffer (uuid: string): Buffer {
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
   * @param {number} position Position to read from
   * @returns {string}
   */
  public static fromBuffer (buffer: Buffer, position: number = 0): string {
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
   * @param {number} width Number of characters to zero pad
   * @returns {string}
   */
  public static pad (value: string, width: number): string {
    width -= value.length

    return width > 0
      ? new Array(width + (/\./.test(value) ? 2 : 1)).join('0') + value
      : `${value}`
  }
}

export default UUID
