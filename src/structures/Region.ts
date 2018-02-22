import { Client } from '..'
import { Collection } from '../utilities'

import Agent from './Agent'
import Entities from './Entities'
import Parcel from './Parcel'

interface IRegionOptions {
  handle: number
}

class Region {
  public handle: number
  public agents: Collection<string, Agent>
  public objects: Entities
  public parcels: Collection<string, Parcel>

  public readonly client: Client

  constructor (client: Client, data: IRegionOptions) {
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
