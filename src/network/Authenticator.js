import crypto from 'crypto'
import os from 'os'
import xmlrpc from 'xmlrpc'

import { Constants } from '../utilities'

class Authenticator {
  constructor (channel, version) {
    this.channel = channel
    this.verison = version
    this.agent = `${channel} ${version}`

    // TODO: Figure out better method of doing this, for callers file?
    this.digest = crypto.createHash('md5').update(JSON.stringify(this)).digest('hex')
  }

  async login (username, password, start = 'uri:Lehon&130&115&48') {
    const platforms = {
      darwin: 'Mac',
      linux: 'Lin',
      win32: 'Win'
    }

    const system = {
      filesystem: { id0: '00000000-0000-0000-0000-000000000000' },
      network: os.networkInterfaces().en0 || [{ mac: '00000000-0000-0000-0000-000000000000' }],
      platform: platforms[os.platform()] || 'Lin'
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
      passwd: `$1$${crypto.createHash('md5').update(password).digest('hex')}`,
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

    const client = xmlrpc.createSecureClient({
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
