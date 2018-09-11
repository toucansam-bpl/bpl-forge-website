import { computed, decorate, observable, } from 'mobx'

import { log } from '../domain/util/logger'


export default class DelegateStore {
  delegates = new Map()

  constructor(nodeApi) {
    this.nodeApi = nodeApi
  }

  async init() {
    log('Initializing Delegate Store.')
    const delegates = await this.nodeApi.getActiveDelegates()
    console.log(delegates.delegates[0])
    delegates.delegates.forEach(d => this.delegates.set(d.publicKey, d))
  }

  get(publicKey) {
    return this.delegates.get(publicKey)
  }

  get hasLoadedDelegates() {
    return this.delegates.size > 0
  }
}

decorate(DelegateStore, {
  delegates: observable,
  hasLoadedDelegates: computed,
})
