import Big from 'big-js'
import { action, computed, observable } from 'mobx'

import BlockRewardCalculator from '../domain/rewards/BlockRewardCalculator'
import calculateEstimatedReward from '../domain/calculateEstimatedReward'
import FeeReward from '../domain/rewards/rewardParts/FeeReward'
import FixedReward from '../domain/rewards/rewardParts/FixedReward'
import InterestReward from '../domain/rewards/rewardParts/InterestReward'

export default class PriceStore {
  constructor(feeReward, priceApi, stakeProvider) {
    const fixedReward = new FixedReward(this)
    const interestReward = new InterestReward(stakeProvider)

    this.priceApi = priceApi
    this.rewardCalculator = new BlockRewardCalculator([
      feeReward,
      fixedReward,
      interestReward,
    ])

    this.init()
  }

  async init() {
    this.prices = await this.priceApi.getBplPrice(this.prices)
  }

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
  get bplDailyReward() {
    return calculateEstimatedReward(this.blockReward, 'Per Day')
  }

  @computed
  get bplMonthlyReward() {
    return calculateEstimatedReward(this.blockReward, 'Per Month')
  }

  @computed
  get bplRestOfYearReward() {
    return calculateEstimatedReward(this.blockReward, 'Rest of Year')
  }

  @computed
  get currencyBlockReward() {
    return this.blockReward.times(this.activePrice)
  }

  @computed
  get currencyDailyReward() {
    return this.bplDailyReward.times(this.activePrice)
  }

  @computed
  get currencyMonthlyReward() {
    return this.bplMonthlyReward.times(this.activePrice)
  }

  @computed
  get currencyRestOfYearReward() {
    return this.bplRestOfYearReward.times(this.activePrice)
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
