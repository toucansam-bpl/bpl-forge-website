import Big from 'big-js'
import { action, computed, observable } from 'mobx'

import fromApiString from '../../../util/fromApiString'

const blocksPerWeek = 4 * 60 * 24 * 2 //7

export default class FeeReward {
  constructor(nodeApi) {
    this.nodeApi = nodeApi

    this.init()
  }

  @observable blockCount = Big(0)
  @observable totalFees = Big(0)

  @action
  async init() {
    const necessaryRequestCount = blocksPerWeek / 100
    let totalFees = Big(0)
    for (let i = 0; i < necessaryRequestCount; i += 1) {
      this.blockCount = this.blockCount.plus(100)

      let response = await this.nodeApi.getBlocks(100 * i)
      totalFees = response.blocks.reduce(
        (sum, block) => sum.plus(fromApiString(block.totalFee)),
        totalFees
      )
    }
    this.totalFees = totalFees
  }

  @computed
  get reward() {
    return this.blockCount.eq(0) ? Big(0) : this.totalFees.div(this.blockCount)
  }
}
