import PacketBuffer from '../helpers/PacketBuffer'

class CompressedObjectValue {
  private type: any
  private flag: number

  constructor (type: any, flag: number) {
    this.type = type
    this.flag = flag
  }

  public read (buffer: PacketBuffer, flags: number): any {
    if (this.flag && !(flags & this.flag)) {
      return this.preset
    }

    return buffer.read(this.type)
  }
}

export default CompressedObjectValue
