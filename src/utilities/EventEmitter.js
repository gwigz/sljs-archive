import EventEmitter3 from 'eventemitter3'

class EventEmitter extends EventEmitter3 {
  one (...args) {
    super.once(...args)
  }
}

export default EventEmitter
