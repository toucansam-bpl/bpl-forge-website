import { computed, decorate, observable, when, } from 'mobx'
import { task } from 'mobx-task'

import { fromApiString } from '../domain/util/format'


export default class DelegateStore {
  activeDelegate = null
  addressToPublicKey = new Map()
  delegates = new Map()
  isInitialized = false

  constructor(nodeApi) {
    this.nodeApi = nodeApi
  }

  async init() {
    console.log('Initializing Delegate Store.')
    const delegates = await this.nodeApi.getActiveDelegates()
    delegates.delegates.forEach(d => {
      this.delegates.set(d.publicKey, d)
      this.addressToPublicKey.set(d.address, d.publicKey)
    })

    this.isInitialized = true
  }

  get(publicKey) {
    return this.delegates.get(publicKey)
  }

  get hasLoadedDelegates() {
    return this.delegates.size > 0
  }

  async setActiveDelegate(address) {
    await when(() => this.isInitialized)
    
    console.log(`Setting active delegate: ${address}`)
    const publicKey = this.addressToPublicKey.get(address)
    const delegate = this.delegates.get(publicKey)
    const voters = await this.nodeApi.getVoters(publicKey)
    console.log(voters)
    this.activeDelegate = {
      ... delegate,

      vote: fromApiString(delegate.vote),
      voters: voters.accounts.map(v => ({
        ... v,

        balance: fromApiString(v.balance),
      })),
    }
  }
}


decorate(DelegateStore, {
  activeDelegate: observable,
  delegates: observable,
  hasLoadedDelegates: computed,
  isInitialized: observable,
  setActiveDelegate: task,
})
