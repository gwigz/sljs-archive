class Serializer {
  convert (...args) {
    console.log('got', ...args)
    console.log('yay')

    return undefined
  }
}

export default Serializer
