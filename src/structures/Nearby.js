import { ChatFromViewer } from '../network/packets'
import { Collection } from '../utilities'

class Nearby {
  constructor (client) {
    /**
     * The Client that instantiated this Nearby object.
     *
     * @name Nearby#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: client })

    this.agents = new Collection
  }

  whisper (message, channel = 0) {
    return this.message.whisper(channel, message, 0)
  }

  say (message, channel = 0) {
    return this.message.say(channel, message, 1)
  }

  shout (message, channel = 0) {
    return this.message.shout(channel, message, 2)
  }

  message (message, channel = 0, type = 1) {
    return this.client.send(new ChatFromViewer({
      channel: channel,
      type: type,
      message: `${message}\x00`
    }))
  }
}

export default Nearby
