import Big from 'big-js'
import { computed } from 'mobx'

const fixedReward = Big(5)

export default class InterestReward {
  constructor(uiStore) {
    this.uiStore = uiStore
  }

  @computed
  get reward() {
    return this.uiStore.isUsingFixedReward ? fixedReward : Big(0)
  }
}
