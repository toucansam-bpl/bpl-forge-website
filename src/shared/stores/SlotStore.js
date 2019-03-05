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
import { blockInterval, getEpochTime, nextMsTimestamp, fromApiToMs, } from '../domain/util/time'

const delegateCount = 201


export default class SlotStore {
  hasCompletedSlotsForRound = false
  isAwaitingBlock = true
  isAwaitingSlot = true
  slotInProcess = null
  unprocessedSlots = []

  completedSlots = []
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

      // this.watchForNextBlock()
      // this.watchForUnprocessedSlot()
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
        all.unprocessedSlots.push(completedSlot)

        if (completedSlot.hasMissedBlock) {
          all.totalSlotCount += 1
          let roundSlot = this.getRoundSlot(all.totalSlotCount)
          let matchingDelegate = this.delegateStore.get(roundSlot.publicKey)
          let lastSlot = this.upcomingSlots[this.upcomingSlots.length - 1]
          all.additionalSlots.push(basicSlot(all.totalSlotCount, matchingDelegate, nextMsTimestamp(lastSlot.timestamp)))
        }
      }
      return all
    }, {
      additionalSlots: [],
      block: nextBlock,
      hasFoundProcessedSlot: false,
      totalSlotCount: this.completedSlots.length + this.upcomingSlots.length,
      unprocessedSlots: [],
      upcomingSlots: [],
    })

    this.unprocessedSlots.replace(this.unprocessedSlots.concat(blockSlots.unprocessedSlots))
    this.upcomingSlots.replace(blockSlots.upcomingSlots.concat(blockSlots.additionalSlots))

    this.hasCompletedSlotsForRound = this.unprocessedSlots.length === 0 && this.upcomingSlots.length === 0
  }

  watchForUnprocessedSlot() {
    when(() => this.isAwaitingSlot && this.hasUnprocessedSlots, () => this.processNextSlot())
  }
  
  get hasUnprocessedSlots() {
    return this.unprocessedSlots.length > 0
  }

  nextUnprocessedSlot() {
    return this.unprocessedSlots.shift()
  }

  processNextSlot() {
    this.isAwaitingSlot = false
    this.watchForUnprocessedSlot()

    const nextSlot = this.nextUnprocessedSlot()
    log('Processing next slot.', nextSlot)

    this.slotInProcess = {
      hasLeftUpcoming: false,
      shouldBeVisible: true,
      slot: nextSlot,
    }

    setTimeout(() => this.slotInProcess.shouldBeVisible = false, 0)
  }

  get hasSlotInProcess() {
    return this.slotInProcess !== null
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
  init: task,
  missedBlockCount: computed,
  slots: computed,
  successfulForgeCount: computed,
  totalForgedAmount: computed,
  upcomingSlots: observable,



  hasCompletedSlotsForRound: observable,
  hasSlotInProcess: computed,
  hasUnprocessedSlots: computed,
  isAwaitingBlock: observable,
  isAwaitingSlot: observable,
  nextUnprocessedSlot: action,
  processReceivedBlock: action,
  processNextSlot: action,
  remainingSlotCount: computed,
  slotInProcess: observable,
  unprocessedSlots: observable,
})
