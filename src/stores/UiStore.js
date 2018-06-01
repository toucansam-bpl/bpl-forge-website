import Big from 'big-js'
import { action, computed, observable } from 'mobx'

import BlockRewardCalculator from '../domain/rewards/BlockRewardCalculator'
import calculateEstimatedReward from '../domain/calculateEstimatedReward'
import FeeReward from '../domain/rewards/rewardParts/FeeReward'
import FixedReward from '../domain/rewards/rewardParts/FixedReward'
import InterestReward from '../domain/rewards/rewardParts/InterestReward'

export default class UiStore {
  constructor(bitApi, nodeApi, priceApi) {
    const feeReward = new FeeReward(nodeApi)
    const fixedReward = new FixedReward(this)
    const interestReward = new InterestReward(this)

    this.bitApi = bitApi
    this.nodeApi = nodeApi
    this.priceApi = priceApi
    this.rewardCalculator = new BlockRewardCalculator([
      feeReward,
      fixedReward,
      interestReward,
    ])

    this.init()
  }

  async init() {
    const bplInfo = await this.bitApi.getCurrentSupply()

    this.bplSupply = Big(bplInfo.supply)
    this.prices = await this.priceApi.getBplPrice(this.prices)
  }

  @observable bplSupply = Big(0)
  @observable currency = 'USD'
  @observable delegateStake = Big(75000)
  @observable enteredPrice = 0
  @observable isUsingEnteredPrice = false
  @observable isUsingFixedReward = false
  @observable priceLoadedDate = new Date().toLocaleString()
  @observable
  prices = {
    AUD: 0,
    BTC: 0,
    CNY: 0,
    EUR: 0,
    GBP: 0,
    USD: 0,
  }
  @observable timeSpan = 'Per Month'

  @computed
  get activePrice() {
    return this.isUsingEnteredPrice
      ? this.enteredPrice
      : this.prices[this.currency]
  }

  @computed
  get blockReward() {
    return this.rewardCalculator.blockReward
  }

  @computed
  get estimatedBplReward() {
    return calculateEstimatedReward(this.blockReward, this.timeSpan)
  }

  @computed
  get estimatedCurrencyReward() {
    return this.estimatedBplReward.times(this.activePrice)
  }

  @computed
  get marketCap() {
    return this.bplSupply.times(this.activePrice)
  }

  @action
  resetPrice() {
    this.isUsingEnteredPrice = false
  }

  @action
  setCurrency(currency) {
    this.currency = currency
  }

  @action
  setIsUsingFixedReward(isChecked) {
    this.isUsingFixedReward = isChecked
  }

  @action
  setEnteredPrice(price) {
    this.isUsingEnteredPrice = true
    this.enteredPrice = price
  }

  @action
  setPrices(prices) {
    this.prices = prices
  }

  @action
  setStake(stake) {
    this.delegateStake = Big(stake)
  }

  @action
  setTimeSpan(timeSpan) {
    this.timeSpan = timeSpan
  }
}
