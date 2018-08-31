import { action,
         computed, 
         decorate,
         observable,
         runInAction,
         when,
       } from 'mobx'
import { task } from 'mobx-task'

import { log } from '../domain/util/logger'
import getSlotsFromInitialData, { createSlotFromBlock } from './slotFactory'


export default class SlotStore {
  completedSlots = []
  isAwaitingBlock = true
  isAwaitingSlot = true
  slotInProcess = null
  upcomingSlots = []
  unprocessedSlots = []

  constructor(nodeApi, blockStore, roundStore) {
    this.blockStore = blockStore
    this.nodeApi = nodeApi
    this.roundStore = roundStore
  }

  async init() {
    log('Initializing Slot Store.')
    const delegates = await this.nodeApi.getActiveDelegates()
    const delegatesById = delegates.delegates.reduce((all, delegate) => {
      all[delegate.publicKey] = delegate
      return all
    }, {})

    console.log(delegates.delegates[0])
    await when(() => this.roundStore.hasNewRound)

    const result = getSlotsFromInitialData(this.roundStore.newRound, delegatesById)    
    this.watchForNextBlock()
    this.watchForUnprocessedSlot()

    runInAction(() => {
      this.completedSlots.replace(result.completed)
      this.upcomingSlots.replace(result.upcoming)
    }) 
  }

  watchForNextBlock() {
    when(() => this.isAwaitingBlock && this.blockStore.hasNextBlock, () => this.processReceivedBlock())
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
      }
      return all
    }, {
      block: nextBlock,
      hasFoundProcessedSlot: false,
      unprocessedSlots: this.unprocessedSlots,
      upcomingSlots: [],
    })

    this.unprocessedSlots.replace(blockSlots.unprocessedSlots)
    this.upcomingSlots.replace(blockSlots.upcomingSlots)
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
  hasSlotInProcess: computed,
  hasUnprocessedSlots: computed,
  init: task,
  isAwaitingBlock: observable,
  isAwaitingSlot: observable,
  nextUnprocessedSlot: action,
  processReceivedBlock: action,
  processNextSlot: action,
  slotInProcess: observable,
  slotJoinedCompleted: action,
  slotLeftUpcoming: action,
  upcomingSlots: observable,
  unprocessedSlots: observable,
})
