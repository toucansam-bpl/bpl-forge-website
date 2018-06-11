import Big from 'big-js'
import { computed } from 'mobx'

const interestPerBlock = Big('0.000005235866863')

export default class InterestReward {
  constructor(stakeProvider) {
    this.stakeProvider = stakeProvider
  }

  @computed
  get reward() {
    return this.stakeProvider.delegateStake.times(interestPerBlock)
  }
}
