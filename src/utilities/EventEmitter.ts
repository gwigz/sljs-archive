import EventEmitter3 from 'eventemitter3'

class EventEmitter extends EventEmitter3 {
  public one (...args): this {
    super.once(...args)
  }
}

export default EventEmitter
