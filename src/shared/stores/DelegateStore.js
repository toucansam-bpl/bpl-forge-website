import { computed, decorate, observable, when, } from 'mobx'
import { task } from 'mobx-task'

import { log } from '../domain/util/logger'


export default class DelegateStore {
  activeAddress = null
  addressToPublicKey = new Map()
  delegates = new Map()
  isInitialized = false

  constructor(nodeApi) {
    this.nodeApi = nodeApi
  }

  async init() {
    log('Initializing Delegate Store.')
    const delegates = await this.nodeApi.getActiveDelegates()
    delegates.delegates.forEach(d => {
      this.delegates.set(d.publicKey, d)
      this.addressToPublicKey.set(d.address, d.publicKey)
    })

    this.isInitialized = true
  }

  get activeDelegate() {
    return this.delegates.get(this.addressToPublicKey.get(this.activeAddress))
  }

  get(publicKey) {
    return this.delegates.get(publicKey)
  }

  get hasLoadedDelegates() {
    return this.delegates.size > 0
  }

  async setActiveDelegate(address) {
    await when(() => this.isInitialized)
    
    console.log(`Setting active address: ${address}`)
    this.activeAddress = address
  }
}

//     const voters = await this.nodeApi.getVoters(this.selectedDelegate.publicKey)

decorate(DelegateStore, {
  activeAddress: observable,
  activeDelegate: computed,
  delegates: observable,
  hasLoadedDelegates: computed,
  isInitialized: observable,
  setActiveDelegate: task,
})
