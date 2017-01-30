const Agent = require('../structures/Agent');
const Constants = require('../utilities/Constants');
const crypto = require('crypto');
const EventEmitter = require('events').EventEmitter;
const os = require('os');
const Simulator = require('../structures/Simulator');
const UDPManager = require('./udp/UDPManager');
const XMLRPCAuthenticator = require('./xmlrpc/XMLRPCAuthenticator');

/**
 * The starting point for the SLJS client.
 * @extends {EventEmitter}
 */
class Client extends EventEmitter {
  /**
   * @param {ClientOptions} [options] Options for the client
   */
  constructor(options = {}) {
    super();

    /**
     * The UDP manager.
     * @type {UDPManager}
     * @private
     */
    this.udp = new UDPManager(this);

    /**
     * The REST manager.
     * @type {XMLRPCAuthenticator}
     * @private
     */
    this.xmlrpc = new XMLRPCAuthenticator(this);

    /**
     * The Agent representing the logged in Client.
     * @type {?Agent}
     */
    this.agent = null;

    /**
     * The Simulator representing the current Simulator.
     * @type {?Simulator}
     */
    this.simulator = null;

    /**
     * The Region representing the current Region.
     * @type {?Region}
     */
    this.region = null;

    /**
     * The Parcel representing the current Parcel.
     * @type {?Parcel}
     */
    this.parcel = null;

    // appearance
    // state
    // uptime
    // parcel
    // estate
    // - parcels?
    // - objects
    // - agents/avatars
    // - terrain
    // friends
    // inventory
    // groups
    // messages
    // - local chat
    // - region messages
    // - script messages (local and remote?)
    // - script dialogs
    // - instant messages
    // - group messages
    // - group notices
    // ...
  }

  connect(username, password, options) {
    if (typeof username !== 'string') {
      throw new Error(Constants.Errors.INVALID_LOGIN);
    }

    if (typeof password !== 'string') {
      throw new Error(Constants.Errors.INVALID_LOGIN);
    }

    const platforms = {
      darwin: 'Mac',
      linux: 'Lin',
      win32: 'Win',
    }

    const system = {
      filesystem: { id0: '00000000-0000-0000-0000-000000000000' }, // TODO!
      network: os.networkInterfaces().en0 || [{ mac: '00000000-0000-0000-0000-000000000000' }],
      platform: platforms[os.platform()] || 'Lin',
    }

    var parameters = {
      first: username.split(' ')[0],
      last: username.split(' ')[1] || 'Resident',
      passwd: '$1$' + crypto.createHash('md5').update(password).digest('hex'),
      start: 'uri:Jersey Isle&216&196&1200', // first|last|uri:sim&x&y&z
      channel: Constants.Package.name,
      version: Constants.Package.version,
      platform: system.platform,
      mac: system.network[0].mac,
      id0: system.filesystem.id0,
      agree_to_tos: true, // TODO: Move these to parameters?
      read_critical: true, // TODO: Move these to parameters?
      viewer_digest: crypto.createHash('md5').update(JSON.stringify(Constants.Package)).digest('hex'),
      options: [
        'inventory-root',
        'inventory-skeleton',
        //'inventory-lib-root',
        //'inventory-lib-owner',
        //'inventory-skel-lib',
        //'initial-outfit',
        //'gestures',
        //'event_categories',
        //'event_notifications',
        //'classified_categories',
        'buddy-list',
        //'ui-config',
        //'login-flags',
        //'global-textures',
        'adult_compliant',
      ]
    };

    this.emit(Constants.Events.DEBUG, `Attempting login using username "${username}"...`);

    // sim_ip
    // sim_port

    // agent_id
    // session_id
    // circuit_code

    // UseCircuitCode
    // CompleteAgentMovement
    // AgentUpdate
    // > AgentMovementComplete

    // TODO: Check if we are already logged in.
    return this.xmlrpc.login(parameters).then(this.connected.bind(this));
  }

  connected(response) {
    if ('circuit_code' in response
      && 'agent_id' in response
      && 'session_id' in response
      && 'sim_ip' in response
      && 'sim_port' in response
    ) {
      this.agent = new Agent(this, {
        id: response.agent_id,
        session: response.session_id,
        circuit: response.circuit_code
      });

      this.simulator = new Simulator(this, {
        ip: response.sim_ip,
        port: response.sim_port,
        circuit: response.circuit_code,
        uri: response.seed_capability || null
      });

      this.udp.handshake();
    } else {
      // error
    }
  }
}

module.exports = Client;

/**
 * Emitted for general warnings.
 * @event Client#warn
 * @param {string} info The warning
 */

/**
 * Emitted for general debugging information.
 * @event Client#debug
 * @param {string} info The debug information
 */
