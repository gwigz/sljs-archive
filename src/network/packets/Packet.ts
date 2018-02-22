import { Collection } from '../../utilities'

class Packet {
  public static id: number
  public static frequency: number
  public static trusted: boolean
  public static compression: boolean
  public static format: Collection<string, any>

  public index: number
  public reliable: boolean
  public data: any

  /**
   * @param {object|Buffer} [data] Packet block data to be seralized, may be optional
   * @param {string} [data.agentData.agent] AgentID
   * @param {string} [data.agentData.session] SessionID
   */
  constructor (data = {}) {
    if (this.constructor === Packet) {
      throw new Error('Do not instantiate from the abstract packet class!')
    }

    this.data = data
  }
}

export default Packet
