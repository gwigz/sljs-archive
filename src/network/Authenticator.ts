import * as Crypto from 'crypto'
import * as OS from 'os'
import * as XMLRPC from 'xmlrpc'

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

  public login(username: string, password: string, start: string = 'last'): Promise<any> {
    const platforms = {
      darwin: 'Mac',
      linux: 'Lin',
      win32: 'Win'
    }

    const system = {
      filesystem: { id0: '00000000-0000-0000-0000-000000000000' },
      network: OS.networkInterfaces().en0 || [{ mac: '00000000-0000-0000-0000-000000000000' }],
      platform: platforms[OS.platform()] || 'Lin'
    }

    const options = [
      'inventory-root',
      'inventory-skeleton',
      'buddy-list',
      'adult_compliant'
    ]

    const parameters = {
      first: username.split(' ')[0],
      last: username.split(' ')[1] || 'Resident',
      passwd: `$1$${Crypto.createHash('md5').update(password).digest('hex')}`,
      start: start,
      channel: this.channel,
      version: this.version,
      platform: system.platform,
      mac: system.network[0].mac,
      id0: system.filesystem.id0,
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
