import Entity from './Entity'

import { ImprovedInstantMessage } from '../network/packets'
import { Vector3, UUID } from '../network/types'

class Agent extends Entity {
  constructor (client, data) {
    super(client, data)

    /**
     * True if agent is self, as in the Client connected Agent.
     * @type {boolean}
     */
    this.self = 'session' in data

    if (this.self) {
      /**
       * The Client connected Agent session ID, only exists for self.
       * @type {?UUID}
       */
      this.session = data.session
    }
  }

  get flags () {
    // - AGENT_CONTROL_AT_POS = 0x00000001
    // - AGENT_CONTROL_AT_NEG = 0x00000002
    // - AGENT_CONTROL_LEFT_POS = 0x00000004
    // - AGENT_CONTROL_LEFT_NEG = 0x00000008
    // - AGENT_CONTROL_UP_POS = 0x00000010
    // - AGENT_CONTROL_UP_NEG = 0x00000020
    // - AGENT_CONTROL_PITCH_POS = 0x00000040
    // - AGENT_CONTROL_PITCH_NEG = 0x00000080
    // - AGENT_CONTROL_YAW_POS = 0x00000100
    // - AGENT_CONTROL_YAW_NEG = 0x00000200
    // - AGENT_CONTROL_FAST_AT = 0x00000400
    // - AGENT_CONTROL_FAST_LEFT = 0x00000800
    // - AGENT_CONTROL_FAST_UP = 0x00001000
    // - AGENT_CONTROL_FLY = 0x00002000
    // - AGENT_CONTROL_STOP = 0x00004000
    // - AGENT_CONTROL_FINISH_ANIM = 0x00008000
    // - AGENT_CONTROL_STAND_UP = 0x00010000
    // - AGENT_CONTROL_SIT_ON_GROUND = 0x00020000
    // - AGENT_CONTROL_MOUSELOOK = 0x00040000
    // - AGENT_CONTROL_NUDGE_AT_POS = 0x00080000
    // - AGENT_CONTROL_NUDGE_AT_NEG = 0x00100000
    // - AGENT_CONTROL_NUDGE_LEFT_POS = 0x00200000
    // - AGENT_CONTROL_NUDGE_LEFT_NEG = 0x00400000
    // - AGENT_CONTROL_NUDGE_UP_POS = 0x00800000
    // - AGENT_CONTROL_NUDGE_UP_NEG = 0x01000000
    // - AGENT_CONTROL_TURN_LEFT = 0x02000000
    // - AGENT_CONTROL_TURN_RIGHT = 0x04000000
    // - AGENT_CONTROL_AWAY = 0x08000000
    // - AGENT_CONTROL_LBUTTON_DOWN = 0x10000000
    // - AGENT_CONTROL_LBUTTON_UP = 0x20000000
    // - AGENT_CONTROL_ML_LBUTTON_DOWN = 0x40000000
    // - AGENT_CONTROL_ML_LBUTTON_UP = 0x80000000

    return 0
  }

  get state () {
    // - AGENT_STATE_TYPING = 0x04
    // - AGENT_STATE_EDITING = 0x10

    return 0
  }

  get distance () {
    if (this.self) {
      return 0.0
    }

    return Vector3.distance(this.client.agent.position, this.position)
  }

  message (message) {
    return this.client.send(new ImprovedInstantMessage({
      id: this.client.agent.session,
      dialog: 0,
      timestamp: 0,
      fromGroup: false,
      fromAgentName: this.client.agent.name,
      message: `${message}\x00`,
      toAgent: this.id,
      offline: 0,
      parentEstate: 0,
      region: UUID.zero,
      position: Vector3.zero,
      binaryBucket: null
    }))
  }

  whisper (...args) {
    return this.client.nearby.whisper(...args)
  }

  say (...args) {
    return this.client.nearby.say(...args)
  }

  shout (...args) {
    return this.client.nearby.shout(...args)
  }
}

export default Agent
