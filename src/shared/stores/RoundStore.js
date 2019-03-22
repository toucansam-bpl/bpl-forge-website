import { action,
         computed, 
         decorate,
         observable,
       } from 'mobx'
import { task } from 'mobx-task'

import { log } from '../domain/util/logger'
import { byAscending } from '../domain/util/sorters'


export default class RoundStore {
  constructor(nodeApi) {
    this.nodeApi = nodeApi
  }

  activeDelegates = new Map()
  addressToKeys = new Map()
  endHeight
  isReady = false
  round
  roundBlocks = []
  startHeight

  async init() {
    log(`Loading initial current round.`)
    const currentRound = await this.nodeApi.getCurrentRound()
    log(`Initial current round loaded.`, currentRound)

    currentRound.activeDelegates.forEach(delegate => {
      this.activeDelegates.set(delegate.publicKey, delegate)
      this.addressToKeys.set(delegate.address, delegate.publicKey)
    })
    this.endHeight = currentRound.endHeight
    this.round = currentRound.round
    this.roundBlocks = currentRound.blocks
    this.startHeight = currentRound.startHeight
    
    this.isReady = true
  }

  async * blocks(fromBlockHeight) {
    for (const block of this.roundBlocks.filter(b => b.height >= fromBlockHeight)) {
      yield block
    }

    let lastBlock = this.roundBlocks[this.roundBlocks.length - 1] || { height: this.startHeight - 1 }
    while (lastBlock.height < this.endHeight) {
      const nextHeight = lastBlock.height + 1
      const newBlocks = []
      let offset = 0
      do {
        let blocks = await this.nodeApi.getBlocks(offset, 10)
        newBlocks = newBlocks.concat(blocks.filter(b => b.height > lastBlock.height && b.height <= this.endHeight))
        newBlocks.sort(byAscending('height'))

        offset += 10
      } while (newBlocks.length && newBlocks[0].height > nextHeight)

      for (const newBlock of newBlocks) {
        lastBlock = newBlock
        this.roundBlocks.push(newBlock)
        yield newBlock
      }

      await sleep(15000)
    }

    return
  }

  get currentHeight() {
    return this.roundBlocks[this.roundBlocks.length - 1].height
  }
}

function sleep(duration) {
  return new Promise(resolve => setTimeout(() => resolve(0), duration))
}

decorate(RoundStore, {
  activeDelegates: observable,
  currentHeight: computed,
  endHeight: observable,
  init: task,
  isReady: observable,
  round: observable,
  startHeight: observable,
})
