import { Authenticator, Core } from './network'
import { Agent, Nearby } from './structures'
import { Collection, Constants, EventEmitter } from './utilities'

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
    this.authenticator = new Authenticator('sljs', '0.0.0')

    /**
     * The Agent representing the logged in Client, becomes fully functional
     * after ready event is emitted.
     *
     * @type {?Agent}
     */
    this.agent = new Agent(this, {})

    /**
     * Regions we are currently connected to, or recently have been.
     *
     * @type {Collection}
     */
    this.regions = new Collection

    /**
     * The nearby helper, becomes fully functional after ready event is emitted.
     *
     * @name Client#nearby
     * @type {Nearby}
     * @readonly
     */
    Object.defineProperty(this, 'nearby', { value: new Nearby(this) })

    // parcel
    // friends
    // groups
    // inventory
    //
    // https://gist.github.com/gwigz/0c13179591a3d005eb4765a3bfe9fc3d
  }

  get status () {
    return this.core.status
  }

  /**
   * The Region representing the current region, as in the region that this
   * agent is standing within. Note that once teleporting is functional this
   * value will be overwritten with a new object, watch the "teleport" event
   * to avoid any potential issues.
   *
   * @returns {?Region}
   */
  get region () {
    return this.agent.region
  }

  /**
   * The Parcel representing the current parcel, as in the parcel that this
   * agent is standing within.
   *
   * @returns {?Parcel}
   */
  get parcel () {
    return this.agent.parcel
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

      return
    }

    throw new Error(response.message || Constants.Errors.LOGIN_FAILED)
  }

  /**
   * Sends Packet (or multiple) to currently active Circuit.
   *
   * @param {...Packet} packets Packets to send
   * @returns {?Promise}
   */
  send (...packets) {
    if (this.core.circuit === undefined) {
      throw new Error(Constants.Errors.NOT_CONNECTED)
    }

    return this.core.circuit.send(...packets)
  }

  /**
   * Sends instant message to Agent.
   *
   * @param {Agent} agent Agent to messsage
   * @param {string} message Message to send to agent
   * @returns {?Promise}
   */
  message (agent, message) {
    if (!(agent instanceof Agent)) {
      throw new Error(Constants.Errors.INVALID_PARAMETER_TYPE)
    }

    return agent.message(message)
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
