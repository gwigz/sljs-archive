/**
 * An extended map with utility functions.
 * @extends Map
 */
class Collection extends Map {
  /**
   * Returns all items in the collection as an array.
   * @returns {Array} Array of values
   */
  toArray () {
    return [...this.values()]
  }

  /**
   * Executes a function on all values.
   * @param {Function} function forEach function parameters
   * @returns {Array} forEach result
   */
  forEach (...args) {
    return this.toArray().forEach(...args)
  }

  /**
   * Filter values by function.
   * @param {Function} function filter function parameters
   * @returns {Array} Array of filtered values
   */
  filter (...args) {
    return this.toArray().filter(...args)
  }

  /**
   * Find values by function.
   * @param {Function} function find function parameters
   * @returns {*} Value that was found
   */
  find (...args) {
    return this.toArray().find(...args)
  }

  /**
   * Map values by function.
   * @param {Function} function map function parameters
   * @returns {Array} Array of mapped values
   */
  map (...args) {
    return this.toArray().map(...args)
  }

  /**
   * Reduce values by function.
   * @param {Function} function reduce function parameters
   * @returns {Array} Array of reduced values
   */
  reduce (...args) {
    return this.toArray().reduce(...args)
  }

  /**
   * Pluck values with key by function.
   * @param {string} key The matching key
   * @returns {Array} Array of keyed values
   */
  pluck (key) {
    return this.toArray().reduce((index, object) => {
      if (!object[key]) return index
      index.push(object[key])
      return index
    }, [])
  }

  /**
   * Group values by key.
   * @param {string} key The matching key
   * @returns {Object} Object containing grouped values
   */
  groupBy (key) {
    return this.toArray().reduce((index, object) => {
      const value = object[key]
      index[value] = index[value] || []
      index[value].push(object)
      return index
    }, {})
  }

  /**
   * Get unique values.
   * @returns {Array} unique Array of unique values
   */
  unique () {
    return [...new Set(this.toArray())]
  }
}

export default Collection
