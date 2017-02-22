class Delegate {
  constructor (circuit) {
    Object.defineProperty(this, 'circuit', { value: circuit })
    Object.defineProperty(this, 'core', { value: this.circuit.core })
    Object.defineProperty(this, 'client', { value: this.core.client })
  }

  /**
   * Toggle for avoiding decoding packets we don't care about, for example
   * ChatFromSimulator will return `false` if no listen events are bound to
   * the clinets nearby helper.
   *
   * @returns {boolean} True if we want to recieve packets, defaulted to true
   */
  get waiting () {
    return true
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
