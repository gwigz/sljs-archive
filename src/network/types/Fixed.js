class Fixed {
  /**
   * Pads buffer bytes of fixed length if nessecery.
   *
   * @param {Buffer} buffer This will truncate or pad if nessecery
   * @returns {Buffer}
   */
  static toBuffer (buffer) {
    if (buffer.length === this.size) {
      return buffer
    }

    if (buffer.length > this.size) {
      return buffer.slice(0, this.size)
    }

    return Buffer.alloc(this.size).copy(buffer)
  }

  /**
   * Extracts bytes for fixed length from the buffer.
   *
   * @param {Buffer} buffer Buffer to handle
   * @param {integer} start Position to read from
   * @returns {Buffer}
   */
  static fromBuffer (buffer, start) {
    return buffer.slice(start, start + this.size)
  }
}

export default Fixed
