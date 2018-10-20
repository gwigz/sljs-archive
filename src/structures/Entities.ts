import { Collection } from '../utilities'
import Entity from './Entity'

class Entities extends Collection<number, Entity> {
  private register: Collection<string, number>

  constructor() {
    super()

    // For ObjectID to UUID translation.
    this.register = new Collection
  }

  public lookup(key: string): Entity | null {
    if (this.register.has(key)) {
      return this.get(this.register.get(key))
    }

    return null
  }

  public set(id: number, entity: Entity): this {
    super.set(id, entity)

    // Add object UUID to our lookup object.
    this.register.set(entity.key, id)

    return this
  }

  public delete(id: number): boolean {
    const entity = this.get(id)

    if (entity) {
      this.register.delete(entity.key)
    }

    return super.delete(id)
  }
}

export default Entities
