import Delegate from './Delegate'

class ChatFromSimulator extends Delegate {
  async handle (packet) {
    const nearby = this.client.nearby

    for (const data of packet.data.chatData) {
      nearby.emit('message', data.source, data.message)
    }
  }
}

export default ChatFromSimulator
