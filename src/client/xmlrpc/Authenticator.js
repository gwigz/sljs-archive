const Constants = require('../../utilities/Constants');
const xmlrpc = require('xmlrpc');

class Authenticator {
  constructor() {
    /**
     * The XMLRPC connection to the gateway
     * @type {xmlrpc}
     */
    this.xmlrpc = xmlrpc.createSecureClient({
      url: Constants.Endpoints.login,
      headers: { 'User-Agent': `${Constants.Package.name} ${Constants.Package.version}` },
      rejectUnauthorized: false
    });
  }

  login(parameters) {
    return new Promise((resolve, reject) => {
      this.xmlrpc.methodCall('login_to_simulator', [parameters], (error, response) => {
        if (error || typeof response !== 'object' || !response.login) {
          reject(error === null ? response : error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

module.exports = Authenticator;
