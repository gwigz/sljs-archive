class AbstractHandler {
  constructor(manager) {
    this.manager = manager;
  }

  /**
   * Handle given packet blocks.
   * @param {Object} parameters
   */
  handle(parameters) {
    return parameters;
  }
}

module.exports = AbstractHandler;
