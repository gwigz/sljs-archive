import Client from '..'
import { ChatFromViewer } from '../network/packets'
import { Constants, EventEmitter } from '../utilities'

import Agent from './Agent'

class Nearby extends EventEmitter {
  public readonly client: Client

  constructor (client: Client) {
    super()

    /**
     * The Client that instantiated this Nearby object.
     *
     * @name Nearby#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: client })
  }

  get agents (): Collection<string, Agent> {
    return this.client.region.agents
  }

  public whisper (message, channel = 0): void {
    return this.message(message, channel, Constants.ChatTypes.WHISPER)
  }

  public say (message, channel = 0): void {
    return this.message(message, channel, Constants.ChatTypes.NORMAL)
  }

  public shout (message, channel = 0): void {
    return this.message(message, channel, Constants.ChatTypes.SHOUT)
  }

  public message (message, channel = 0, type = Constants.ChatTypes.NORMAL): void {
    return this.client.send(new ChatFromViewer({
      chatData: {
        channel,
        type,
        message: `${message}\x00`
      }
    }))
  }

  public listen (callable): void {
    this.on('message', callable)
  }

  public watch (callable): void {
    this.on('agent', callable)
  }
}

export default Nearby
