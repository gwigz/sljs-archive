import { Collection } from '../utilities'

class Entities extends Collection {
  constructor () {
    super()

    // Using WeakMap here, in hopes for automatic handling of
    this.lookup = new WeakMap
  }

  lookup (uuid) {
    if (this.lookup.has(uuid)) {
      return this.get(this.lookup.get(uuid))
    }

    return undefined
  }

  set (id, entity) {
    super.set(id, entity)

    // Add UUID to our lookup WeakMap object.
    this.lookup.set(entity.id, id)
  }
}

export default Entities
