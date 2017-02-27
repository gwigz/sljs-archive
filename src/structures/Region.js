import Entities from './Entities'
import { Collection } from '../utilities'

class Region {
  constructor (client) {
    /**
     * The Client that instantiated this Region.
     *
     * @name Region#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: client })

    this.agents = new Collection
    this.objects = new Entities
    this.parcels = new Collection
  }
}

export default Region
