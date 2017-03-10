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
   * Handler recieved and parsed Packet objects.
   *
   * @param {Packet} packet Parsed packet object
   */
  async handle () {
    // ...
  }

  /**
   * Attempts to fetch region by region handle.
   *
   * @param {Long} handle Region handle
   * @returns {?Region}
   */
  region (handle) {
    // This is kinda ugly, I know.
    return this.client.regions.get(`${handle.getHighBits()}${handle.getLowBits()}`)
  }
}

export default Delegate
