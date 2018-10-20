import { Client } from '..'
import { ChatFromViewer } from '../network/packets'
import { Collection, Constants, EventEmitter } from '../utilities'

import Agent from './Agent'

class Nearby extends EventEmitter {
  public readonly client: Client

  constructor(client: Client) {
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

  get agents(): Collection<string, Agent> {
    return this.client.region.agents
  }

  public whisper(message: string, channel = 0): Promise<Array<void>> {
    return this.message(message, channel, Constants.ChatTypes.WHISPER)
  }

  public say(message: string, channel = 0): Promise<Array<void>> {
    return this.message(message, channel, Constants.ChatTypes.NORMAL)
  }

  public shout(message: string, channel = 0): Promise<Array<void>> {
    return this.message(message, channel, Constants.ChatTypes.SHOUT)
  }

  public message(
    message: string,
    channel = 0,
    type = Constants.ChatTypes.NORMAL
  ): Promise<Array<void>> {
    return this.client.send(
      new ChatFromViewer({
        chatData: {
          channel,
          type,
          message: `${message}\x00`
        }
      })
    )
  }

  // TODO: create message interface/class instead of "any" here
  public listen(callable: (chatter: any, message: string) => void): void {
    this.on('message', callable)
  }

  // TODO: ceate message interface/class instead of "any" here
  public watch(callable: (chatter: any, message: string) => void): void {
    this.on('agent', callable)
  }
}

export default Nearby
