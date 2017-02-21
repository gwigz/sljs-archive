class Delegate {
  constructor (circuit) {
    Object.defineProperty(this, 'circuit', { value: circuit })
    Object.defineProperty(this, 'core', { value: this.circuit.core })
    Object.defineProperty(this, 'client', { value: this.core.client })
  }

  /**
   * Handle given packet blocks.
   * @param {Packet} packet Parsed packet object
   */
  async handle () {
    // ...
  }
}

export default Delegate
