import String from './String'

class Variable1 extends String {
  static prefix = 1
  static size = 256

  /**
   * Converts string into a length-prefixed buffer, ending with a null
   * terminater.
   *
   * @param {string|Buffer} string Maximum length of 2040 bytes, may truncate
   * @returns {Buffer}
   */
  static toBuffer (string) {
    return this.toPrefixedBuffer(this.prefix, string)
  }

  /**
   * Converts buffer input into a string.
   *
   * @param {Buffer} buffer Buffer to convert
   * @param {integer} start Position to read from
   * @returns {string}
   */
  static fromBuffer (buffer, start) {
    return super.fromPrefixedBuffer(this.prefix, buffer, start)
  }
}

export default Variable1
