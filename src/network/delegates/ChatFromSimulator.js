import Delegate from './Delegate'
import { Constants } from '../../utilities'

class ChatFromSimulator extends Delegate {
  async handle (packet) {
    const nearby = this.client.nearby

    for (const data of packet.data.chatData) {
      let chatter = {
        id: data.source,
        name: data.fromName.replace(/\x00$/, ''),
        type: data.sourceType,
        position: data.position
      }

      if (data.source === Constants.ChatSources.OBJECT) {
        chatter.owner = data.owner
      }

      nearby.emit('message', chatter, data.message || undefined)
    }
  }
}

export default ChatFromSimulator
