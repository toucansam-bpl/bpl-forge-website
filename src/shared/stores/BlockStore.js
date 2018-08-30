import { action,
         computed, 
         decorate,
         observable,
         onBecomeObserved,
         onBecomeUnobserved,
         when,
       } from 'mobx'

import { log } from '../domain/util/logger'
import { byAscending } from '../domain/util/sorters'

const blockInterval = 15 * 1000


export default class BlockStore {
  blockListener
  lastProcessedBlockHeight
  unprocessedBlocks = []

  constructor(nodeApi, roundStore) {
    this.nodeApi = nodeApi
    this.roundStore = roundStore

    when(() => this.roundStore.hasNewRound, () => this.init())
  }

  init() {
    log('Initializing Block Store.')
    this.lastProcessedBlockHeight = this.roundStore.initialBlockHeight
    log(`Block store will load blocks after height ${this.lastProcessedBlockHeight}`)

    onBecomeObserved(this, 'hasNextBlock', this.resume)
    onBecomeUnobserved(this, 'hasNextBlock', this.suspend)
  }

  resume = () => {
    log('Resuming block listener.')
    this.blockListener = setInterval(() => this.listenForNewBlocks(), blockInterval)
  }

  async listenForNewBlocks() {
    const blocks = await this.nodeApi.getBlocks(0, 10)
    const newBlocks = blocks.blocks.filter(b => b.height > this.lastProcessedBlockHeight)
    newBlocks.sort(byAscending('height'))
    
    const newUnprocessed = this.unprocessedBlocks.concat(newBlocks)
    log(`There are ${newBlocks.length} new blocks awaiting processing out of ${newUnprocessed.length} total.`)

    this.unprocessedBlocks.replace(newUnprocessed)
  }

  suspend = () => {
    log('Suspending block listener.')
    clearInterval(this.blockListener)
  }

  get hasNextBlock() {
    return this.unprocessedBlocks.length > 0
  }

  nextBlock() {
    const next = this.unprocessedBlocks.shift()
    this.lastProcessedBlockHeight = next.height
    log(`Processing block height ${this.lastProcessedBlockHeight}`)
    return next
  }
}

decorate(BlockStore, {
  hasNextBlock: computed,
  listenForNewBlocks: action,
  nextBlock: action,
  unprocessedBlocks: observable,
})
