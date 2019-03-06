import Big from 'big-js'
import { action,
         computed, 
         decorate,
         observable,
         runInAction,
         when,
       } from 'mobx'
import { task } from 'mobx-task'

import { log } from '../domain/util/logger'
import { createSlotFromBlock, basicSlot } from './slotFactory'
import { blockInterval, nextMsTimestamp, fromApiToMs, } from '../domain/util/time'

const delegateCount = 201


export default class SlotStore {
  completedSlots = []
  hasCompletedSlotsForRound = false
  isAwaitingBlock = true
  roundSlots = new Map()
  upcomingSlots = []

  constructor(nodeApi, blockStore, delegateStore, networkStore) {
    this.nodeApi = nodeApi
    this.blockStore = blockStore
    this.delegateStore = delegateStore
    this.networkStore = networkStore

    when(() => this.networkStore.hasChangedServer, () => this.init())
  }

  async init() {
    log('Initializing Slot Store.')
    this.forgerData = await this.nodeApi.getRoundForgerData()
    await when(() => this.blockStore.isReady && this.delegateStore.isInitialized)

    log('Generating forging list')
    const endOfLastRoundTimestamp = this.blockStore.lastBlockOfLastRound.timestamp
    const lastSlotOfLastRound = this.getSlotNumber(endOfLastRoundTimestamp)
    const firstSlot = lastSlotOfLastRound + 1
    const currentSlot = this.forgerData.currentSlot
    const slotDiff = firstSlot - currentSlot - 1
    const reverseIndex = slotDiff % delegateCount
    const firstForgerIndex = reverseIndex === 0 ? 0 : reverseIndex + delegateCount

    const firstForgers = this.forgerData.delegates.slice(firstForgerIndex)
    const remainingForgers = this.forgerData.delegates.slice(0, firstForgerIndex)
    
    runInAction(() => {
      const result = firstForgers.concat(remainingForgers).reduce((all, publicKey, i) => {
        const slotNumber = i + 1
        const timestamp = nextMsTimestamp(all.lastProcessedTimestamp)
        this.roundSlots.set(slotNumber, {
          slotNumber,
          publicKey
        })
        all.upcomingSlots.push(basicSlot(slotNumber, this.delegateStore.get(publicKey), timestamp))
        all.lastProcessedTimestamp = timestamp
        return all
      }, {
        lastProcessedTimestamp: fromApiToMs(endOfLastRoundTimestamp),
        upcomingSlots: [],
      })

      this.upcomingSlots.replace(result.upcomingSlots)
      this.isReady = true

      this.watchForNextBlock()
    }) 
  }

  getSlotNumber(blockTimestamp) {
		return Math.floor(blockTimestamp / blockInterval)
	}

  watchForNextBlock() {
    when(() => this.blockStore.hasNextBlock && this.isAwaitingBlock, () => this.processReceivedBlock())
  }

  getRoundSlot(totalSlot) {
    // From BPL-node code
    return this.roundSlots.get(totalSlot % 201)
  }

  processReceivedBlock() {
    this.isAwaitingBlock = false
    this.watchForNextBlock()

    const nextBlock = this.blockStore.nextBlock()
    log('Processing next block.', nextBlock)

    const blockSlots = this.upcomingSlots.reduce((all, slot) => {
      if (all.hasFoundProcessedSlot) {
        all.upcomingSlots.push(slot)
      } else {
        const completedSlot = createSlotFromBlock(slot, all.block)
        all.hasFoundProcessedSlot = !completedSlot.hasMissedBlock
        all.completedSlots.push(completedSlot)

        if (completedSlot.hasMissedBlock) {
          all.totalSlotCount += 1
          let roundSlot = this.getRoundSlot(all.totalSlotCount)
          let matchingDelegate = this.delegateStore.get(roundSlot.publicKey)
          let lastSlot = this.completedSlots[this.completedSlots.length - 1] || {
            timestamp: this.lastProcessedTimestamp,
          }
          all.additionalSlots.push(basicSlot(all.totalSlotCount, matchingDelegate, nextMsTimestamp(lastSlot.timestamp)))
        }
      }
      return all
    }, {
      additionalSlots: [],
      block: nextBlock,
      completedSlots: [],
      hasFoundProcessedSlot: false,
      totalSlotCount: this.completedSlots.length + this.upcomingSlots.length,
      upcomingSlots: [],
    })

    this.completedSlots.replace(this.completedSlots.concat(blockSlots.completedSlots))
    this.upcomingSlots.replace(blockSlots.upcomingSlots.concat(blockSlots.additionalSlots))

    this.hasCompletedSlotsForRound = this.upcomingSlots.length === 0
    this.isAwaitingBlock = true
  }

  get missedBlockCount() {
    return this.completedSlots.filter(s => s.hasMissedBlock).length
  }

  get remainingSlotCount() {
    return this.upcomingSlots.length
  }

  get slots() {
    return this.completedSlots.concat(this.upcomingSlots)
  }

  get successfulForgeCount() {
    return this.completedSlots.filter(s => !s.hasMissedBlock).length
  }
  
  get totalForgedAmount() {
    return this.completedSlots
      .filter(s => !s.hasMissedBlock)
      .reduce((sum, slot) => sum.plus(slot.totalForged), Big(0))
  }
}

decorate(SlotStore, {
  completedSlots: observable,
  hasCompletedSlotsForRound: observable,
  init: task,
  isAwaitingBlock: observable,
  missedBlockCount: computed,
  processReceivedBlock: action,
  remainingSlotCount: computed,
  slots: computed,
  successfulForgeCount: computed,
  totalForgedAmount: computed,
  upcomingSlots: observable,
})
