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

    // this.objects Entity[] or maybe Objects and have helper methods there
    // this.parcels Collection<Parcel[]>
  }
}

export default Region
