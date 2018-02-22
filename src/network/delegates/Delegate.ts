import * as Long from 'long'

import { Circuit, Core, Packets } from '..'
import { Client } from '../..'
import { Region } from '../../structures'

interface IDelegeateOptions {
  circuit: Circuit,
  client: Client,
  core: Core
}

abstract class Delegate {
  public readonly circuit: Circuit
  public readonly client: Client
  public readonly core: Core

  constructor (circuit: IDelegeateOptions) {
    Object.defineProperty(this, 'circuit', { value: circuit })
    Object.defineProperty(this, 'client', { value: this.core.client })
    Object.defineProperty(this, 'core', { value: this.circuit.core })
  }

  /**
   * Toggle for avoiding decoding packets we don't care about, for example
   * ChatFromSimulator will return `false` if no listen events are bound to
   * the clinets nearby helper.
   *
   * @returns {boolean} True if we want to recieve packets, defaulted to true
   */
  get waiting (): boolean {
    return true
  }

  /**
   * Handler recieved and parsed Packet objects.
   *
   * @param {Packet} packet Parsed packet object
   */
  public abstract handle (packet: Packets.Packet): void

  /**
   * Attempts to fetch region by region handle.
   *
   * @param {Long} handle Region handle
   * @returns {?Region}
   */
  protected region (handle: Long): Region|null {
    // This is kinda ugly, I know.
    return this.client.regions.get(`${handle.getHighBits()}${handle.getLowBits()}`)
  }
}

export default Delegate
