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
     * Local ID for this Entity.
     * @type {number}
     */
    this.id = data.id

    /**
     * UUID for this Entity.
     * @type {number}
     */
    this.key = data.key || UUID.null

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
  }

  get distance () {
    if (this.self) {
      return 0.0
    }

    return Vector3.distance(this.client.agent.position, this.position)
  }
}

export default Entity
