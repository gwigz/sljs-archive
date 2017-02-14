import String from './String'

class Variable1 extends String {
  static prefix = 1
  static size = 256
  static suffix = 1

  /**
   * Converts string into a length-prefixed buffer, ending with a null
   * terminater.
   *
   * @param {string} string Maximum length of 2040 bytes, will be truncated
   * @return {Buffer}
   */
  static toBuffer(string) {
    return this.toPrefixedBuffer(this.prefix, string)
  }
}

export default Variable1
