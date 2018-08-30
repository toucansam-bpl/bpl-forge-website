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
}

decorate(RoundStore, {
  hasNewRound: computed,
  init: action,
  initialBlockHeight: computed,
  newRound: observable,
})
