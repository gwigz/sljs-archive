const AbstractHandler = require('./AbstractHandler');

class CoarseLocationUpdate extends AbstractHandler {
  handle() {
    return false;
  }
}

module.exports = CoarseLocationUpdate;
