import { Constants, EventEmitter } from '../utilities'
import { ChatFromViewer } from '../network/packets'

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
  }

  get agents () {
    return this.client.region.agents
  }

  whisper (message, channel = 0) {
    return this.message(message, channel, Constants.ChatTypes.WHISPER)
  }

  say (message, channel = 0) {
    return this.message(message, channel, Constants.ChatTypes.NORMAL)
  }

  shout (message, channel = 0) {
    return this.message(message, channel, Constants.ChatTypes.SHOUT)
  }

  message (message, channel = 0, type = Constants.ChatTypes.NORMAL) {
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
