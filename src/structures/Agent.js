import Entity from './Entity'

import { ImprovedInstantMessage } from '../network/packets'
import { Vector3, UUID } from '../network/types'

class Agent extends Entity {
  constructor (client, data) {
    super(client, data)

    /**
     * True if agent is self, as in the Client connected Agent.
     * @type {boolean}
     */
    this.self = 'session' in data

    if (this.self) {
      /**
       * The Client connected Agent session ID, only exists for self.
       * @type {?UUID}
       */
      this.session = data.session
    }

    /**
     * Agents firstname value.
     * @type {?string}
     */
    this.firstname = data.firstname || undefined

    // Change buffer value to string.
    if (this.firstname instanceof Buffer) {
      this.firstname = this.firstname.toString('utf8')
    }

    /**
     * Agents lastname value.
     * @type {?string}
     */
    this.lastname = data.lastname || undefined

    // Change buffer value to string.
    if (this.lastname instanceof Buffer) {
      this.lastname = this.lastname.toString('utf8')
    }
  }

  message (message) {
    return this.client.send(new ImprovedInstantMessage({
      id: this.client.agent.session,
      dialog: 0,
      timestamp: 0,
      fromGroup: false,
      fromAgentName: this.client.agent.name,
      message: `${message}\x00`,
      toAgent: this.id,
      offline: 0,
      parentEstate: 0,
      region: UUID.zero,
      position: Vector3.zero,
      binaryBucket: null
    }))
  }

  whisper (...args) {
    return this.client.nearby.whisper(...args)
  }

  say (...args) {
    return this.client.nearby.say(...args)
  }

  shout (...args) {
    return this.client.nearby.shout(...args)
  }
}

export default Agent
