import Big from 'big-js'
import { action, computed, observable } from 'mobx'

export default class FeeReward {
  @observable blockCount = Big(0)
  @observable totalFees = Big(0)

  @action
  addBlockFee(fee) {
    this.totalFees = this.totalFees.plus(fee)
  }

  @computed
  get reward() {
    return this.blockCount.eq(0) ? Big(0) : this.totalFees.div(this.blockCount)
  }
}
