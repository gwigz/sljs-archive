import { Constants } from '../../utilities'
import Delegate from './Delegate'

class ChatFromSimulator extends Delegate {
  public async handle (packet): void {
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

  get waiting (): boolean {
    return this.client.nearby.listeners('message', true)
  }
}

export default ChatFromSimulator
