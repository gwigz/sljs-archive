import Crypto from 'crypto'
import OS from 'os'
import XMLRPC from 'xmlrpc'

import { UUID } from '../network/types'
import { Constants } from '../utilities'

class Authenticator {
  private readonly channel: string
  private readonly version: string
  private readonly agent: string
  private readonly digest: string

  constructor(channel: string, version: string) {
    this.channel = channel
    this.version = version
    this.agent = `${channel} ${version}`

    // TODO: Figure out better method of doing this, for callers file?
    this.digest = Crypto.createHash('md5').update(JSON.stringify(this)).digest('hex')
  }

  public login(
    username: string,
    password: string,
    start: string = 'last'
  ): Promise<any> {
    const platforms = {
      darwin: 'Mac',
      linux: 'Lin',
      win32: 'Win'
    }

    const system = {
      network: OS.networkInterfaces().en0 || [{ mac: UUID.zero }],
      id0: UUID.zero,
      platform: platforms[OS.platform()] || 'Lin'
    }

    const options = [
      'inventory-root',
      'inventory-skeleton',
      'buddy-list',
      'adult_compliant'
    ]

    const passwd = Crypto.createHash('md5')
      .update(password.substr(0, 16))
      .digest('hex')

    const parameters = {
      first: username.split(' ')[0],
      last: username.split(' ')[1] || 'Resident',
      passwd: '$1$' + passwd,
      start: start,
      channel: this.channel,
      version: this.version,
      platform: system.platform,
      mac: system.network[0].mac,
      id0: system.id0,
      agree_to_tos: true,
      read_critical: true,
      viewer_digest: this.digest,
      options: options
    }

    const client = XMLRPC.createSecureClient({
      url: Constants.Endpoints.LOGIN_URL,
      headers: { 'User-Agent': this.agent },
      rejectUnauthorized: false
    })

    return new Promise((resolve) => {
      client.methodCall('login_to_simulator', [parameters], (error, response) => {
        resolve(error || response)
      })
    })
  }
}

export default Authenticator
