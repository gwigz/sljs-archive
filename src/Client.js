import EventEmitter from 'events'

import { Authenticator, Core } from './network'
import { Agent } from './structures'
import { Constants } from './utilities'

/**
 * The starting point for the SLJS client.
 * @extends {EventEmitter}
 */
class Client extends EventEmitter {
  constructor () {
    super()

    /**
     * Core instance that instantiated this Client.
     *
     * @name Client#core
     * @type {Core}
     * @readonly
     */
    Object.defineProperty(this, 'core', { value: new Core(this) })

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

    // nearby
    // parcel
    // region
    // friends
    // groups
    // inventory
    //
    // https://gist.github.com/gwigz/0c13179591a3d005eb4765a3bfe9fc3d
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
      this.agent = new Agent(this, {
        id: response.agent_id,
        session: response.session_id
      })

      await this.core.handshake(response.session_id, {
        id: response.circuit_code,
        address: response.sim_ip,
        port: response.sim_port
      })

      this.emit(Constants.Events.DEBUG, 'Connected!')

      return
    }

    throw new Error(response.message || Constants.Errors.LOGIN_FAILED)
  }

  async disconnect () {
    await this.core.disconnect()

    // May want to emit some statistics here, later.
    this.emit(Constants.Events.DEBUG, 'Disconnected!')
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
