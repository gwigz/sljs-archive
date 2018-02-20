import { Collection } from '../utilities'
import Entity from './Entity'

class Entities extends Collection {
  private register: Collection

  constructor () {
    super()

    // Using WeakMap here, in hopes for automatic handling of
    this.register = new Collection
  }

  public lookup (key): ?Entity {
    if (this.register.has(key)) {
      return this.get(this.register.get(key))
    }

    return undefined
  }

  public set (id, entity): void {
    super.set(id, entity)

    // Add object UUID to our lookup object.
    this.register.set(entity.key, id)
  }

  public delete (id): void {
    const entity = this.get(id)

    if (entity) {
      this.register.delete(entity.key)
    }

    super.delete(id)
  }
}

export default Entities
