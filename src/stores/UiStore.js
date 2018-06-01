import Big from 'big-js'
import { action, computed, observable } from 'mobx'

import BlockRewardCalculator from '../domain/rewards/BlockRewardCalculator'
import calculateEstimatedReward from '../domain/calculateEstimatedReward'
import FeeReward from '../domain/rewards/rewardParts/FeeReward'
import FixedReward from '../domain/rewards/rewardParts/FixedReward'
import InterestReward from '../domain/rewards/rewardParts/InterestReward'

export default class UiStore {
  constructor() {
    const feeReward = new FeeReward()
    const fixedReward = new FixedReward(this)
    const interestReward = new InterestReward(this)

    this.rewardCalculator = new BlockRewardCalculator([
      fixedReward,
      interestReward,
    ])

    feeReward.addBlockFee('0.00100862')
  }

  @observable bplPrice = Big(0.1254)
  @observable bplSupply = Big(25000000)
  @observable currency = 'USD'
  @observable delegateStake = Big(75000)
  @observable isUsingFixedReward = false
  @observable timeSpan = 'Per Month'

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
    return this.estimatedBplReward.times(this.bplPrice)
  }

  @computed
  get marketCap() {
    return this.bplPrice.times(this.bplSupply)
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
  setPrice(price) {
    this.bplPrice = Big(price)
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
