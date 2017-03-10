import { Collection } from '../utilities'

class Entities extends Collection {
  constructor () {
    super()

    // Using WeakMap here, in hopes for automatic handling of
    this.register = new Collection
  }

  lookup (key) {
    if (this.register.has(key)) {
      return this.get(this.register.get(key))
    }

    return undefined
  }

  set (id, entity) {
    super.set(id, entity)

    // Add object UUID to our lookup object.
    this.register.set(entity.key, id)
  }

  delete (id) {
    const entity = this.get(id)

    if (entity) {
      this.register.delete(entity.key)
    }

    super.delete(id)
  }
}

export default Entities
