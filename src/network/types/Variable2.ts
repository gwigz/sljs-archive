import Variable from './Variable'

class Variable2 extends Variable {
  public readonly static prefix: number = 2

  /**
   * Converts string into a length-prefixed buffer, ending with a null
   * terminater.
   *
   * @param {string} string Maximum length of 65535 bytes, may truncate
   * @returns {Buffer}
   */
  public static toBuffer (string: string): Buffer {
    return this.toPrefixedBuffer(this.prefix, string)
  }

  /**
   * Converts buffer input into a string.
   *
   * @param {Buffer} buffer Buffer to convert
   * @param {number} start Position to read from
   * @returns {string}
   */
  public static fromBuffer (buffer: Buffer, start: number): string {
    return super.fromPrefixedBuffer(this.prefix, buffer, start)
  }
}

export default Variable2
