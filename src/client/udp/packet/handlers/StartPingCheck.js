const AbstractHandler = require('./AbstractHandler')
const PKID = require('../../../../utilities/Packets')

class StartPingCheck extends AbstractHandler {
  handle(parameters) {
    this.manager.send(PKID.CompletePingCheck, parameters)
  }
}

module.exports = StartPingCheck
