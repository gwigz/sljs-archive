import { Vector3, UUID } from '../network/types'

class Entity {
  constructor (client, data) {
    /**
     * The Client that instantiated this Entity.
     *
     * @name Entity#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: client })

    this.setup(data)
  }

  setup (data) {
    /**
     * UUID for this Entity.
     * @type {string}
     */
    this.id = data.id || UUID.null

    /**
     * Current position of Entity.
     * @type {Number[]}
     */
    this.position = data.position || undefined

    /**
     * Current rotation of Entity.
     * @type {Number[]}
     */
    this.rotation = data.rotation || Vector3.zero

    /**
     * Toggle for Entitys that have recently been "killed", these are cleaned
     * up eventually within Region via. it's Entities helper.
     *
     * @type {Boolean}
     */
    this.dead = false
  }

  get distance () {
    if (this.self) {
      return 0.0
    }

    return Vector3.distance(this.client.agent.position, this.position)
  }
}

export default Entity
