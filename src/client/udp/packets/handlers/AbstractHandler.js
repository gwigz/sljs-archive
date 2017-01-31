class AbstractHandler {
  constructor(manager) {
    this.manager = manager;
  }

  /**
   * Handle given packet blocks.
   * @param {Object} parameters Packet block data
   */
  handle() {
    // ...
  }
}

module.exports = AbstractHandler;
