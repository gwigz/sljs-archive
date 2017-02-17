class Delegate {
  constructor (circuit) {
    this.circuit = circuit
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
