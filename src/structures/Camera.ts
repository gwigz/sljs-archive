import { Client } from '..'

/**
 * Represents the agents camera, which contains and controls camera position
 * known to the connected region/simulator.
 */
class Camera {
  public readonly client: Client

  constructor (client: Client) {
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
