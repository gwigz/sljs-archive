import EventEmitter from 'eventemitter3'

import Circuit from './Circuit'
import Socket from './Socket'

import { LogoutRequest } from './packets'
import { Collection, Constants } from '../utilities'

/**
 * The core handles connecting to a Simulator, processing and sending
 * messages. It's basically handles 100% of the the communication.
 */
class Core extends EventEmitter {
  /**
   * @param {Client} client For emiting processed messages back to
   */
  constructor (client) {
    super()

    /**
     * Client instance that instantiated this Core.
     *
     * @name Acknowledger#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: client })

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
     * Currently active circuit.
     * @type {?Circuit}
     */
    this.circuit = null

    /**
     * The status of this class, a type of Constants.Status, IDLE default.
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
   *
   * @param {Circuit} circuit Circuit to send packets too
   * @param {...Packet} packets Packet to send
   * @returns {Promise}
   */
  send (circuit, ...packets) {
    return this.socket.send(circuit, ...packets)
  }

  /**
   * Connects the client to a given circuit code.
   *
   * @param {string} session Session ID
   * @returns {Promise}
   */
  handshake (session, ...args) {
    const circuit = new Circuit(this, ...args)

    this.status = Constants.Status.CONNECTING

    if (this.circuit === null) {
      this.circuit = circuit
    }

    this.circuits.set(`${circuit.address}:${circuit.port}`, circuit)

    return circuit.handshake()
  }

  ready () {
    if (this.status < Constants.Status.CONNECTING) {
      return
    }

    this.status = Constants.Status.READY

    this.client.emit(Constants.Events.DEBUG, 'Connected!')
    this.client.emit(Constants.Events.READY)
  }

  /**
   * Disconnects the client from the current circuit.
   */
  disconnect () {
    this.circuit.send(new LogoutRequest)
  }
}

export default Core
