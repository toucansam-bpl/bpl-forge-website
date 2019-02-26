import { action,
         computed, 
         decorate,
         observable,
       } from 'mobx'

import { log } from '../domain/util/logger'


export default class RoundStore {
  constructor(nodeApi) {
    this.nodeApi = nodeApi
  }

  newRound = null

  get hasNewRound() {
    return this.newRound !== null
  }

  async init() {
    log(`Loading initial current round.`)
    const currentRound = await this.nodeApi.getCurrentRound()
    log(`Initial current round loaded.`, currentRound)

    this.newRound = currentRound
  }

  get initialBlockHeight() {
    return this.hasNewRound
      ? this.newRound.delegateActivity.reduce((initialHeight, slot) => {
            const slotValue = slot.hasMissedBlock ? 0 : 1
            return initialHeight + slotValue
          },
          this.newRound.fromBlock - 1
        ) 
      : 0
  }

  get endHeight() {
    return this.hasNewRound
      ? this.startHeight + 200
      : 'n/a'
  }

  get startHeight() {
    return this.hasNewRound
      ? this.newRound.fromBlock
      : 'n/a'
  }
}

decorate(RoundStore, {
  endHeight: computed,
  hasNewRound: computed,
  init: action,
  initialBlockHeight: computed,
  newRound: observable,
  startHeight: computed,
})
