const AbstractHandler = require('./AbstractHandler');

class RegionHandshake extends AbstractHandler {
  handle(parameters) {
    return false;
  }
}

module.exports = RegionHandshake;
