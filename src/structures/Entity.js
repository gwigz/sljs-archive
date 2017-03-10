import { U8, Vector3, Quaternion, UUID } from '../network/types'

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
     * Entity parent, undefined if root.
     * @type {?number}
     */
    this.parent = data.parent || undefined

    /**
     * Entity state, which probably refers to an attachment point index for
     * it's parent ID.
     *
     * @type {?number}
     */
    this.state = data.state || undefined

    /**
     * UUID for this Entity.
     * @type {UUID}
     */
    this.key = data.key || UUID.null

    /**
     * Owners UUID for this Entity.
     * @type {?UUID}
     */
    this.owner = data.owner || undefined

    /**
     * Entity flags, see `Constants.ObjectFlags` for context.
     * @type {number}
     */
    this.flags = data.flags || 0

    /**
     * Current position of Entity.
     * @type {number[]}
     */
    this.position = data.position || undefined

    /**
     * Current rotation of Entity.
     * @type {number[]}
     */
    this.rotation = data.rotation || Quaternion.zero

    /**
     * Scale of Entity.
     * @type {number[]}
     */
    this.scale = data.scale || Vector3.zero

    /**
     * Floating text, object contains text and color values.
     * @type {?number}
     */
    this.text = data.text || undefined

    // Change buffer value to string.
    if (typeof data.text === 'object' && data.text.value instanceof Buffer) {
      this.text.value = data.text.value.toString('utf8')
    }

    // Change buffer value to vector.
    if (typeof data.text === 'object' && data.text.color instanceof Buffer) {
      this.text.color = [
        U8.fromBuffer(this.text.color, 0),
        U8.fromBuffer(this.text.color, 1),
        U8.fromBuffer(this.text.color, 2),
        U8.fromBuffer(this.text.color, 3)
      ]
    }

    /**
     * Material type, see `Constants.ObjectMaterials` for context.
     * @type {number}
     */
    this.material = data.material || 0

    /**
     * Tree type, see `Constants.ObjectTrees` for context.
     * @type {?number}
     */
    this.tree = data.tree || undefined

    /**
     * Default click action, see `Constants.ObjectActions` for context.
     * @type {number}
     */
    this.action = data.action || 0

    /**
     * Local ID values of all children relating to this object.
     * @type {number[]}
     */
    this.children = []
  }

  get distance () {
    if (this.self) {
      return 0.0
    }

    return Vector3.distance(this.client.agent.position, this.position)
  }
}

export default Entity
