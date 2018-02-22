abstract class Fixed {
  public static size: number

  /**
   * Pads buffer bytes of fixed length if nessecery.
   *
   * @param {Buffer} buffer This will truncate or padded if nessecery
   * @returns {Buffer}
   */
  public static toBuffer (buffer: Buffer): Buffer {
    if (buffer.length === this.size) {
      return buffer
    }

    if (buffer.length > this.size) {
      return buffer.slice(0, this.size)
    }

    const output = Buffer.alloc(this.size)

    // Insert into new buffer, limited by correct size, this way it will be
    // padded with zeros.
    output.copy(buffer, 0, this.size)

    return output
  }

  /**
   * Extracts bytes for fixed length from the buffer.
   *
   * @param {Buffer} buffer Buffer to handle
   * @param {number} start Position to read from
   * @returns {Buffer}
   */
  public static fromBuffer (buffer: Buffer, start: number): Buffer {
    return buffer.slice(start, start + this.size)
  }
}

export default Fixed
