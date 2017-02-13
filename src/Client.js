import crypto from 'crypto'
import EventEmitter from 'events'
import os from 'os'

import { Authenticator, Core } from './network'
import { Agent, Simulator } from './structures'
import { Constants } from './utilities'

/**
 * The starting point for the SLJS client.
 * @extends {EventEmitter}
 */
class Client extends EventEmitter {
  constructor () {
    super()

    /**
     * The network interface.
     * @type {Core}
     * @private
     */
    this.core = new Core(this)

    /**
     * The interface for first circuit creation, via. XMLRPC authentication.
     * @type {Authenticator}
     * @private
     */
    // `${Constants.Package.name} ${Constants.Package.version}`)
    this.authenticator = new Authenticator('sljs', '0.0.0')

    /**
     * The Agent representing the logged in Client.
     * @type {?Agent}
     */
    this.agent = null

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

  get status () {
    return this.core.status
  }

  async connect (username, password) {
    if (this.status < Constants.Status.IDLE) {
      throw new Error(Constants.Errors.ALREADY_CONNECTED)
    }

    if (typeof username !== 'string') {
      throw new Error(Constants.Errors.INVALID_LOGIN)
    }

    if (typeof password !== 'string') {
      throw new Error(Constants.Errors.INVALID_LOGIN)
    }

    this.emit(Constants.Events.DEBUG, `Attempting login using username "${username}"...`)

    const response = await this.authenticator.login(username, password)

    if ('circuit_code' in response
      && 'agent_id' in response
      && 'session_id' in response
      && 'sim_ip' in response
      && 'sim_port' in response
    ) {
      return this.handshake(response)
    }
  }

  handshake (response) {
    this.agent = new Agent(this, {
      id: response.agent_id,
      session: response.session_id
    })

    return this.core.handshake(response.session_id, {
      id: response.circuit_code,
      address: response.sim_ip,
      port: response.sim_ip,
    })
  }

  async disconnect () {
    await this.core.disconnect()
  }
}

export default Client

/**
 * Emitted for general warnings.
 * @event Client#warning
 * @param {string} info The warning
 */

/**
 * Emitted for debugging information.
 * @event Client#debug
 * @param {string} info The debug information
 */
