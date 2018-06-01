import Big from 'big-js'
import { computed } from 'mobx'

const interestPerBlock = Big('0.000005235866863')

export default class InterestReward {
  constructor(uiStore) {
    this.uiStore = uiStore
  }

  @computed
  get reward() {
    return this.uiStore.delegateStake.times(interestPerBlock)
  }
}
