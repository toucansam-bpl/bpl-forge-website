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
import getSlotsFromInitialData, { createSlotFromBlock, basicSlot } from './slotFactory'
import { blockInterval, getEpochTime, nextMsTimestamp, } from '../domain/util/time'

const delegateCount = 201


export default class SlotStore {
  completedSlots = []
  hasCompletedSlotsForRound = false
  isAwaitingBlock = true
  isAwaitingSlot = true
  roundSlots = new Map()
  slotInProcess = null
  slots = []
  upcomingSlots = []
  unprocessedSlots = []

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
    await when(() => this.blockStore.hasLoadedInitialBlocks && this.delegateStore.hasLoadedDelegates)

    log('Generating initial slots.')
    const blockInfo = {
      endOfLastRoundTimestamp: this.blockStore.lastBlockOfLastRound.timestamp,
      blocks: this.blockStore.initialBlocks.filter(b => b.height <= this.forgerData.currentBlock).reverse(),
    }
    
    const lastSlotOfLastRound = this.getSlotNumber(blockInfo.endOfLastRoundTimestamp)
    const firstSlot = lastSlotOfLastRound + 1
    const currentSlot = this.forgerData.currentSlot
    const slotDiff = firstSlot - currentSlot - 1
    const reverseIndex = slotDiff % delegateCount
    const firstForgerIndex = reverseIndex === 0 ? 0 : reverseIndex + delegateCount

    let processingSlot = currentSlot
    let forgerIndex = 0
    const returnedForgers = []
    while (processingSlot > lastSlotOfLastRound) {
      returnedForgers.push({
        globalSlot: processingSlot,
        localSlot: forgerIndex + 1,
        delegate: this.delegateStore.get(this.forgerData.delegates[forgerIndex]).username,
      })
      forgerIndex = forgerIndex === 0 ? 200 : forgerIndex - 1
      processingSlot -= 1
    }

    const firstForgers = this.forgerData.delegates.slice(firstForgerIndex)
    const remainingForgers = this.forgerData.delegates.slice(0, firstForgerIndex)
    const forgingInfo = {
      firstSlot,
      currentSlot,
      forgers: firstForgers.concat(remainingForgers),
    }
    const result = getSlotsFromInitialData(forgingInfo, blockInfo, this.delegateStore)    
    console.log(result)

    // this.watchForNextBlock()
    // this.watchForUnprocessedSlot()

    runInAction(() => {
      this.slots.replace(result.slots)
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
    return this.slots.filter(s => s.hasMissedBlock).length
  }

  get remainingSlotCount() {
    return delegateCount - this.successfulForgeCount
  }

  get successfulForgeCount() {
    return this.slots.filter(s => s.hasBeenCompleted && !s.hasMissedBlock).length
  }
  
  get totalForgedAmount() {
    return this.slots
      .filter(s => !s.hasMissedBlock)
      .reduce((sum, slot) => sum.plus(slot.totalForged), Big(0))
  }

  slotJoinedCompleted() {
    this.isAwaitingSlot = true
    this.completedSlots.unshift(this.slotInProcess.slot)
    this.slotInProcess = null

    if (!this.hasUnprocessedSlots) {
      this.isAwaitingBlock = true
    }
  }

  slotLeftUpcoming() {
    this.slotInProcess.hasLeftUpcoming = true

    setTimeout(() => this.slotInProcess.shouldBeVisible = true, 0)
  }
}

decorate(SlotStore, {
  completedSlots: observable,
  hasCompletedSlotsForRound: observable,
  hasSlotInProcess: computed,
  hasUnprocessedSlots: computed,
  init: task,
  isAwaitingBlock: observable,
  isAwaitingSlot: observable,
  missedBlockCount: computed,
  nextUnprocessedSlot: action,
  processReceivedBlock: action,
  processNextSlot: action,
  remainingSlotCount: computed,
  slotInProcess: observable,
  slotJoinedCompleted: action,
  slotLeftUpcoming: action,
  slots: observable,
  successfulForgeCount: computed,
  totalForgedAmount: computed,
  upcomingSlots: observable,
  unprocessedSlots: observable,
})
