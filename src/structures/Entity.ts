import { Client } from '..'
import { Quaternion, U8, UUID, Vector3 } from '../network/types'

interface IEntityOptions {
  id: number
  key: string
  parent?: number
  state?: number
  owner?: string
  flags?: number
  position?: Array<number>
  velocity?: Array<number>
  rotation?: Array<number>
  scale?: Array<number>
  text?: any
  material?: number // Constants.ObjectMaterials
  tree?: number // Constants.ObjectTrees
  action?: number // Constants.ObjectActions
  children?: Array<number>
}

class Entity {
  public id: number
  public key: string
  public parent: number
  public state: number
  public owner: string
  public flags: number
  public position: Array<number>
  public velocity: Array<number>
  public rotation: Array<number>
  public scale: Array<number>
  public text?: { value: string; color: Array<number> }
  public material: number // Constants.ObjectMaterials
  public tree?: number // Constants.ObjectTrees
  public action: number // Constants.ObjectActions
  public children: Array<number>

  public readonly client: Client

  constructor(client: Client, data: IEntityOptions) {
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

  public setup(data: IEntityOptions): void {
    /**
     * Local ID for this Entity.
     * @type {number}
     */
    this.id = data.id

    /**
     * UUID for this Entity.
     * @type {string}
     */
    this.key = data.key || UUID.zero

    /**
     * Entity parent, null if root.
     * @type {?number}
     */
    this.parent = data.parent || null

    /**
     * Entity state, which probably refers to an attachment point index for
     * it's parent ID.
     *
     * @type {?number}
     */
    this.state = data.state || null

    /**
     * Owners UUID for this Entity.
     * @type {string}
     */
    this.owner = data.owner || UUID.zero

    /**
     * Entity flags, see `Constants.ObjectFlags` for context.
     * @type {number}
     */
    this.flags = data.flags || 0

    /**
     * Current position of Entity.
     * @type {number[]}
     */
    this.position = data.position || null

    /**
     * Current velocity of Entity.
     * @type {number[]}
     */
    this.velocity = data.velocity || Vector3.zero

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
     * @type {?any}
     */
    this.text = data.text || null

    // Change buffer value to string.
    if (typeof data.text === 'object' && data.text.value instanceof Buffer) {
      this.text.value = data.text.value.toString('utf8')
    }

    // Change buffer value to vector.
    if (typeof data.text === 'object' && data.text.color instanceof Buffer) {
      this.text.color = [
        U8.fromBuffer(data.text.color, 0),
        U8.fromBuffer(data.text.color, 1),
        U8.fromBuffer(data.text.color, 2),
        U8.fromBuffer(data.text.color, 3)
      ]
    }

    /**
     * Material type, see `Constants.ObjectMaterials` for context.
     * @type {number}
     */
    this.material = data.material || 0

    /**
     * Tree type, see `Constants.ObjectTrees` for context.
     * @type {number}
     */
    this.tree = data.tree || 0

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

  get distance(): number {
    return Vector3.distance(this.client.agent.position, this.position)
  }
}

export default Entity
