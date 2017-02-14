// import * as Delegates from '../delegates'

import Circuit from './Circuit'
import Socket from './Socket'

import { Collection, Constants } from '../utilities'

/**
 * The core handles connecting to a Simulator, processing and sending
 * messages. It's basically handles 100% of the the communication.
 */
class Core {
  /**
   * @param {Client} client For emiting processed messages back to
   */
  constructor (client) {
    /**
     * The Client that instantiated this class.
     * @type {Client}
     */
    this.client = client

    /**
     * The UDP connection/socket.
     * @type {Socket}
     */
    this.socket = new Socket(this)

    /**
     * Collection of recently, and currently in use Circuit instances.
     * @type {Collection}
     */
    this.circuits = new Collection

    /**
     * The status of this class, a type of Constants.Status, IDLE default
     * @type {number}
     */
    this.status = Constants.Status.IDLE
  }

  get agent () {
    return this.client.agent
  }

  get simulator () {
    return this.client.simulator
  }

  /**
   * Sends message to Circuit over UDP socket.
   * @param {Circuit} circuit Circuit to send packet too
   */
  async send (circuit, ...args) {
    await this.socket.send(circuit, ...args)
  }

  /**
   * Connects the client to a given circuit code.
   * @param {string} session Session ID
   * @returns {Promise}
   */
  handshake (session, ...args) {
    const circuit = new Circuit(this, ...args)

    this.status = Constants.Status.CONNECTING
    this.circuits.set(`${circuit.address}:${circuit.port}`, circuit)

    return circuit.handshake()
  }

  /**
   * Connects the client to a given circuit code.
   * @returns {?Promise}
   */
  disconnect () {
    if (this.status <= Constants.Status.CONNECTING) {
      // TODO: ...
    }

    return null
  }
}

export default Core
