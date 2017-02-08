/**
 * Represents an agent.
 */
class Agent {
  constructor (client, data) {
    /**
     * The Client that instantiated this Client object.
     * @name Client#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: client })

    this.setup(data)
  }

  setup (data) {
    /**
     * UUID for this Agent.
     * @type {string}
     */
    this.id = data.id

    /**
     * UUID for the session ID, which Agent would be given given upon login.
     * @type {string}
     */
    this.session = data.session || null

    /**
     * U8 for the circuit code, which Agent would be given given upon login.
     * @type {string}
     */
    this.circuit = data.circuit || null

    /**
     * Current position of the agent.
     * @type {array}
     */
    this.position = data.position || undefined

    /**
     * Current rotation of the agent.
     * @type {array}
     */
    this.rotation = data.rotation || [0.0, 0.0, 0.0, 0.0]
  }

  get flags () {
    // TODO: Calculate and keep result!
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
}

module.exports = Agent
