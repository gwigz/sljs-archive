import String from './String'

class Variable2 extends String {
  static prefix = 2
  static size = 512
  static suffix = 1

  /**
   * Converts string into a length-prefixed buffer, ending with a null
   * terminater.
   *
   * @param {string} string Maximum length of 4080 bytes, will be truncated
   * @returns {Buffer}
   */
  static toBuffer (string) {
    return this.toPrefixedBuffer(this.prefix, string)
  }
}

export default Variable2
