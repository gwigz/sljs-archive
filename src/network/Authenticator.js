import crypto from 'crypto'
import os from 'os'
import xmlrpc from 'xmlrpc'

import { Constants } from '../utilities'

class Authenticator {
  constructor (channel, version) {
    this.options = [
      'inventory-root',
      'inventory-skeleton',
      // 'inventory-lib-root',
      // 'inventory-lib-owner',
      // 'inventory-skel-lib',
      // 'initial-outfit',
      // 'gestures',
      // 'event_categories',
      // 'event_notifications',
      // 'classified_categories',
      'buddy-list',
      // 'ui-config',
      // 'login-flags',
      // 'global-textures',
      'adult_compliant'
    ]

    this.channel = channel
    this.verison = version
    this.agent = `${channel} ${version}`

    // TODO: Figure out better method of doing this, for callers file?
    this.digest = crypto.createHash('md5').update(JSON.stringify(this)).digest('hex')

    /**
     * The XMLRPC connection to the gateway
     * @type {xmlrpc}
     */
    this.xmlrpc = xmlrpc.createSecureClient({
      url: Constants.Endpoints.LOGIN_URL,
      headers: { 'User-Agent': this.agent },
      rejectUnauthorized: false
    })
  }

  async login (username, password, start = 'last') {
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
      // TODO: Move these to parameters?
      agree_to_tos: true,
      read_critical: true,
      viewer_digest: this.digest,
      options: this.options
    }

    const response = await this.call('login_to_simulator', [parameters])

    if (typeof response !== 'object' || !response.login) {
      throw new Error(Constants.Errors.LOGIN_FAILED)
    }

    return response
  }

  call (method, parameters) {
    return new Promise((resolve) => {
      this.xmlrpc.methodCall(method, parameters, (error, response) => {
        resolve(error || response)
      })
    })
  }
}

export default Authenticator
