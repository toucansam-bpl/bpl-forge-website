import { action, computed, observable } from 'mobx'
import { asyncComputed } from 'computed-async-mobx'
import { fromPromise } from 'mobx-utils'

import fromApiString from '../util/fromApiString'
import PriceStore from './PriceStore'

export default class SelectedDelegateStore {
  constructor(feeReward, delegateStore, nodeApi, priceApi) {
    this.delegateStore = delegateStore
    this.nodeApi = nodeApi
    this.price = new PriceStore(feeReward, priceApi, this)
  }

  rewardBlockGetter = asyncComputed({ blocks: [] }, 500, async () => {
    if (!this.hasSelectedDelegate) return { blocks: [] }

    const rewardBlocks = await this.nodeApi.getRewardBlocks(
      this.selectedDelegate.publicKey
    )
    return rewardBlocks
  })

  transactionsGetter = asyncComputed({ transactions: [] }, 500, async () => {
    if (!this.hasSelectedDelegate) return { transactions: [] }

    const transactions = await this.nodeApi.getTransactions(
      this.selectedDelegate.address
    )
    return transactions
  })

  @observable address = ''

  @computed
  get delegateStake() {
    return fromApiString(this.selectedDelegate.vote)
  }

  @computed
  get hasSelectedDelegate() {
    return this.delegateStore.delegates.has(this.address)
  }

  @computed
  get rewardBlocks() {
    return this.rewardBlockGetter.get().blocks
  }

  @computed
  get selectedDelegate() {
    return this.delegateStore.delegates.get(this.address)
  }

  @computed
  get transactions() {
    return this.transactionsGetter.get().transactions
  }

  @action
  setSelectedAddress(address) {
    this.address = address
  }
}
