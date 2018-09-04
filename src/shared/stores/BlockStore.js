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
  unprocessedBlocks = new Map()

  constructor(nodeApi, roundStore) {
    this.nodeApi = nodeApi
    this.roundStore = roundStore

    when(() => this.roundStore.hasNewRound, () => this.init())

    onBecomeObserved(this, 'hasNextBlock', this.resume)
    onBecomeUnobserved(this, 'hasNextBlock', this.suspend)
  }

  init() {
    log('Initializing Block Store.')
    this.lastProcessedBlockHeight = this.roundStore.initialBlockHeight
    log(`Block store will load blocks after height ${this.lastProcessedBlockHeight}`)
  }

  resume = () => {
    log('Resuming block listener.')
    this.blockListener = setInterval(() => this.listenForNewBlocks(), blockInterval)
  }

  async listenForNewBlocks() {
    let offset = 0
    let hasLoadedNewBlocks = true
    while (!this.hasNextBlock && hasLoadedNewBlocks) {
      let blocks = await this.nodeApi.getBlocks(offset, 10)
      let newBlocks = blocks.blocks.filter(b => b.height > this.lastProcessedBlockHeight)
      
      if (newBlocks.length > 0) {
        newBlocks.forEach(b => this.unprocessedBlocks.set(b.height, b))
        log(`There are ${newBlocks.length} new blocks awaiting processing out of ${this.unprocessedBlocks.size} total.`)
        offset += 10
      } else {
        log(`No new blocks loaded.`)
        hasLoadedNewBlocks = false
      }
    }
  }

  suspend = () => {
    log('Suspending block listener.')
    clearInterval(this.blockListener)
  }

  get hasNextBlock() {
    return this.unprocessedBlocks.has(this.nextBlockHeight)
  }

  nextBlock() {
    const next = this.unprocessedBlocks.get(this.nextBlockHeight)
    this.lastProcessedBlockHeight = this.nextBlockHeight
    log(`Processing block height ${this.lastProcessedBlockHeight}`)
    return next
  }
  
  get nextBlockHeight() {
    return this.lastProcessedBlockHeight + 1
  }
}

decorate(BlockStore, {
  hasNextBlock: computed,
  lastProcessedBlockHeight: observable,
  listenForNewBlocks: action,
  nextBlock: action,
  nextBlockHeight: computed,
  unprocessedBlocks: observable,
})
