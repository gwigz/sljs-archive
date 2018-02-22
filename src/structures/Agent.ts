import { Client } from '..'
import { ImprovedInstantMessage } from '../network/packets'
import { UUID, Vector3 } from '../network/types'

import Entity from './Entity'

class Agent extends Entity {
  public self: boolean
  public session: number
  public firstname: string|null
  public lastname: string|null
  public offset: Array<number> = Vector3.zero
  public health: number = 100

  constructor (client: Client, data) {
    super(client, data)

    this.self = 'session' in data

    if (this.self) {
      this.session = data.session
    }

    if (typeof data.firstname === 'string') {
      this.firstname = data.firstname
    } else if (data.firstname instanceof Buffer) {
      this.firstname = data.firstname.toString('utf8')
    } else {
      this.firstname = null
    }

    if (typeof data.lastname === 'string') {
      this.lastname = data.lastname
    } else if (data.lastname instanceof Buffer) {
      this.lastname = data.lastname.toString('utf8')
    } else {
      this.lastname = null
    }
  }

  get name (): string {
    return (this.firstname + ' ' + this.lastname).trim()
  }

  get distance (): number {
    return 0.0
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
