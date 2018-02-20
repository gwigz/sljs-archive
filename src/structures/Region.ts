import Client from '..'
import { Collection } from '../utilities'
import Entities from './Entities'

import Agent from './Agent'

class Region {
  public handle: number
  public agents: Collection<string, Agent>
  public objects: Entities
  public parcels: Collection

  public readonly client: Client

  constructor (client: Client, data) {
    /**
     * The Client that instantiated this Region.
     *
     * @name Region#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: client })

    this.handle = data.handle
    this.agents = new Collection
    this.objects = new Entities
    this.parcels = new Collection
  }
}

export default Region
