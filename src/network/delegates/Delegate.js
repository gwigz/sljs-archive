class Delegate {
  constructor (circuit) {
    this.circuit = circuit
  }

  /**
   * Handle given packet blocks.
   * @param {Packet} packet Parsed packet object
   */
  handle () {
    // ...
  }
}

export default Delegate
