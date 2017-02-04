/**
 * Represents an agent.
 */
class Agent {
  constructor(client, data) {
    /**
     * The Client that instantiated this Client object.
     * @name Client#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: client })

    this.setup(data)
  }

  setup(data) {
    /**
     * UUID of this Agent.
     * @type {string}
     */
    this.id = data.id

    /**
     * UUID of the session ID that Agent was given upon login.
     * @type {string}
     */
    this.session = data.session

    /**
     * UUID of the circuit code that Agent was given upon login.
     * @type {string}
     */
    this.circuit = data.circuit
  }
}

module.exports = Agent
