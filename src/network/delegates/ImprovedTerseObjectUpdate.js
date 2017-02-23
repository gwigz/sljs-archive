import Delegate from './Delegate'

class ImprovedTerseObjectUpdate extends Delegate {
  async handle (packet) {
    console.log(packet)
  }
}

export default ImprovedTerseObjectUpdate
