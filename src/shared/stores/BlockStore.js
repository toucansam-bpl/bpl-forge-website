import { action,
         computed, 
         decorate,
         observable,
         onBecomeObserved,
         onBecomeUnobserved,
         when,
         runInAction,
       } from 'mobx'
import { task } from 'mobx-task'

import { log } from '../domain/util/logger'
import { getFirstBlockHeightOfRound,
         getLastBlockHeightOfRound,
         getRoundNumberFromHeight,
       } from '../domain/util/rounds'
import { byAscending } from '../domain/util/sorters'

const blockInterval = 15 * 1000


export default class BlockStore {
  blockListener
  endHeight
  isReady = false
  lastProcessedBlockHeight
  startHeight
  unprocessedBlocks = new Map()

  constructor(nodeApi, networkStore) {
    this.nodeApi = nodeApi
    this.networkStore = networkStore

    // onBecomeObserved(this, 'hasNextBlock', this.resume)
    // onBecomeUnobserved(this, 'hasNextBlock', this.suspend)

    when(() => this.networkStore.hasChangedServer, () => this.init())
  }

  async init() {
    log('Initializing Block Store.')
    await this.loadInitialBlocks()
    this.resume()
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
      let newBlocks = blocks.filter(b => b.height > this.lastProcessedBlockHeight)
      
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

  async loadInitialBlocks() {
    return new Promise(async (resolve, reject) => {
      try {
        let blocks = await this.nodeApi.getBlocks()
        const currentBlock = blocks[0]
        const roundNumber = getRoundNumberFromHeight(currentBlock.height)
        const lastBlockHeightOfLastRound = getLastBlockHeightOfRound(roundNumber - 1)
    
        blocks = blocks.filter(b => b.height >= lastBlockHeightOfLastRound)

        if(blocks.length === 100) {
          let additionalBlocks = await this.nodeApi.getBlocks(100)
          blocks = blocks.concat(additionalBlocks.filter(b => b.height >= lastBlockHeightOfLastRound))
        }
    
        if(blocks.length === 200) {
          let additionalBlocks = await this.nodeApi.getBlocks(200, 2)
          blocks = blocks.concat(additionalBlocks.filter(b => b.height >= lastBlockHeightOfLastRound))
        }
        
        runInAction(() => {
          this.endHeight = getLastBlockHeightOfRound(roundNumber)
          this.lastBlockOfLastRound = blocks.pop()
          this.lastProcessedBlockHeight = lastBlockHeightOfLastRound
          this.startHeight = getFirstBlockHeightOfRound(roundNumber)
          blocks.forEach(b => this.unprocessedBlocks.set(b.height, b))
          this.isReady = true
        })
        
        resolve()
      } catch (ex) {
        reject(ex)
      }
    })
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
  isReady: observable,
  init: task,
  lastProcessedBlockHeight: observable,
  listenForNewBlocks: action,
  nextBlock: action,
  nextBlockHeight: computed,
  unprocessedBlocks: observable,
})
