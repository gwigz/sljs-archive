/**
 * Represents the agents camera, which contains and controls camera position
 * known to the connected region/simulator.
 */
class Camera {
  constructor (client) {
    /**
     * The Client that instantiated this Camera object.
     * @name Camera#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: client })
  }
}

export default Camera
