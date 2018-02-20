import Client from '..'

import { ImprovedInstantMessage } from '../network/packets'
import { UUID, Vector3 } from '../network/types'

import Entity from './Entity'

class Agent extends Entity {
  public self: boolean
  public session: UUID
  public firstname: ?string
  public lastname: ?string

  constructor (client: Client, data) {
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

    // Correct buffer value to string.
    if (this.lastname instanceof Buffer) {
      this.lastname = this.lastname.toString('utf8')
    }
  }

  public message (message: string): void {
    this.client.send(new ImprovedInstantMessage({
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

  public whisper (...args): void {
    this.client.nearby.whisper(...args)
  }

  public say (...args): void {
    this.client.nearby.say(...args)
  }

  public shout (...args): void {
    this.client.nearby.shout(...args)
  }
}

export default Agent
