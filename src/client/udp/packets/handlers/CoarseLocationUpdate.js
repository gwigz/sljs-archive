const AbstractHandler = require('./AbstractHandler');

class CoarseLocationUpdate extends AbstractHandler {
  handle(parameters) {
    return false;
  }
}

module.exports = CoarseLocationUpdate;
