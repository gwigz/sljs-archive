import EventEmitter from 'events'

import { ChatFromViewer } from '../network/packets'
import { Collection } from '../utilities'

class Nearby extends EventEmitter {
  constructor (client) {
    super()

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
    return this.message(message, channel, 0)
  }

  say (message, channel = 0) {
    return this.message(message, channel, 1)
  }

  shout (message, channel = 0) {
    return this.message(message, channel, 2)
  }

  message (message, channel = 0, type = 1) {
    return this.client.send(new ChatFromViewer({
      chatData: {
        channel: channel,
        type: type,
        message: `${message}\x00`
      }
    }))
  }

  listen (callable) {
    return this.on('message', callable)
  }

  watch (callable) {
    return this.on('agent', callable)
  }
}

export default Nearby
