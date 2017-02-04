const crypto = require('crypto')
const EventEmitter = require('events').EventEmitter
const os = require('os')

const { Authenticator } = require('./xmlrpc')
const { Manager } = require('./udp')

const { Agent, Simulator } = require('../structures')
const { Constants } = require('../utilities')

/**
 * The starting point for the SLJS client.
 * @extends {EventEmitter}
 */
class Client extends EventEmitter {
  constructor() {
    super()

    /**
     * The UDP Manager.
     * @type {Manager}
     * @private
     */
    this.udp = new Manager(this)

    /**
     * The XMLRPC Authenticator.
     * @type {Authenticator}
     * @private
     */
    this.xmlrpc = new Authenticator(this)

    /**
     * The Agent representing the logged in Client.
     * @type {?Agent}
     */
    this.agent = null

    /**
     * The Simulator representing the current Simulator.
     * @type {?Simulator}
     */
    this.simulator = null

    // appearance
    // state
    // uptime
    // region
    // estate
    // parcel
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

  get status() {
    return this.udp.status
  }

  connect(username, password) {
    if (typeof username !== 'string') {
      throw new Error(Constants.Errors.INVALID_LOGIN)
    }

    if (typeof password !== 'string') {
      throw new Error(Constants.Errors.INVALID_LOGIN)
    }

    const platforms = {
      darwin: 'Mac',
      linux: 'Lin',
      win32: 'Win'
    }

    const system = {
      // TODO: ...
      filesystem: { id0: '00000000-0000-0000-0000-000000000000' },
      network: os.networkInterfaces().en0 || [{ mac: '00000000-0000-0000-0000-000000000000' }],
      platform: platforms[os.platform()] || 'Lin'
    }

    var parameters = {
      first: username.split(' ')[0],
      last: username.split(' ')[1] || 'Resident',
      passwd: `$1$${crypto.createHash('md5').update(password).digest('hex')}`,
      // first|last|uri:sim&x&y&z
      start: 'last',
      channel: Constants.Package.name,
      version: Constants.Package.version,
      platform: system.platform,
      mac: system.network[0].mac,
      id0: system.filesystem.id0,
      // TODO: Move these to parameters?
      agree_to_tos: true,
      read_critical: true,
      viewer_digest: crypto.createHash('md5').update(JSON.stringify(Constants.Package)).digest('hex'),
      options: [
        'inventory-root',
        'inventory-skeleton',
        // 'inventory-lib-root',
        // 'inventory-lib-owner',
        // 'inventory-skel-lib',
        // 'initial-outfit',
        // 'gestures',
        // 'event_categories',
        // 'event_notifications',
        // 'classified_categories',
        'buddy-list',
        // 'ui-config',
        // 'login-flags',
        // 'global-textures',
        'adult_compliant'
      ]
    }

    this.emit(Constants.Events.DEBUG, `Attempting login using username "${username}"...`)

    // TODO: Check if we are already logged in.
    return this.xmlrpc.login(parameters).then(this.connected.bind(this))
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
      })

      this.simulator = new Simulator(this, {
        ip: response.sim_ip,
        port: response.sim_port,
        circuit: response.circuit_code,
        uri: response.seed_capability || null
      })

      this.udp.handshake()
    } else {
      throw new Error(Constants.Errors.LOGIN_FAILED)
    }
  }

  disconnect() {
    // TODO: Update status and such.
    return this.udp.disconnect()
  }
}

module.exports = Client

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
