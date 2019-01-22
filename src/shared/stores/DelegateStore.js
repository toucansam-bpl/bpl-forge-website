import { computed, decorate, observable, when, } from 'mobx'
import { task } from 'mobx-task'

import { fromApiString } from '../domain/util/format'

class Paginator {
  allItems = []
  pageNumber = 0
  pageSize = 25
  totalCount = 0

  constructor(items, totalCount = null) {
    if (items) {
      this.allItems.replace(items)
    }

    this.totalCount = totalCount === null ? items.length : totalCount
  }

  get items() {
    const pageStartIndex = this.pageNumber * this.pageSize
    const pageEndIndex = pageStartIndex + this.pageSize - 1
    return this.allItems.slice(pageStartIndex, pageEndIndex)
  }
}

decorate(Paginator, {
  allItems: observable,
  items: computed,
  pageNumber: observable,
  pageSize: observable,
  totalCount: observable,
})



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
    const rewardBlocks = await this.nodeApi.getRewardBlocks(publicKey)
    const voters = await this.nodeApi.getVoters(publicKey)
    console.log(rewardBlocks)
    const transformedBlocks = rewardBlocks.blocks.map(b => ({
      ... b,

      reward: fromApiString(b.reward),
      totalAmount: fromApiString(b.totalAmount),
      totalFee: fromApiString(b.totalFee),
      totalForged: fromApiString(b.totalForged),
    }))

    this.activeDelegate = {
      ... delegate,

      rewardBlockPagination: new Paginator(transformedBlocks, rewardBlocks.count),
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
