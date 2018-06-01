import Big from 'big-js'
import { computed, observable } from 'mobx'

export default class BlockRewardCalculator {
  constructor(rewardParts) {
    this.rewardParts = rewardParts
  }

  @observable rewardParts

  @computed
  get blockReward() {
    return this.rewardParts.reduce((sum, rewardPart) => {
      return rewardPart.reward.plus(sum)
    }, Big(0))
  }
}
