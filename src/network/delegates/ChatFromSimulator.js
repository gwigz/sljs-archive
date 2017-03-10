import Delegate from './Delegate'
import { Constants } from '../../utilities'

class ChatFromSimulator extends Delegate {
  get waiting () {
    return this.client.nearby.listeners('message', true)
  }

  async handle (packet) {
    for (const data of packet.data.chatData) {
      const chatter = {
        key: data.source,
        name: data.fromName.toString().slice(0, -1),
        type: data.sourceType,
        position: data.position
      }

      if (data.source === Constants.ChatSources.OBJECT) {
        chatter.owner = data.owner
      }

      this.client.nearby.emit('message', chatter, data.message.toString().slice(0, -1))
    }
  }
}

export default ChatFromSimulator
