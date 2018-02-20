import * as EM3 from 'eventemitter3'

class EventEmitter extends EM3.EventEmitter {
  public one (event: string|symbol, fn: (...args: Array<any>) => void, context?: any): this {
    return super.once(event, fn, context)
  }
}

export default EventEmitter
