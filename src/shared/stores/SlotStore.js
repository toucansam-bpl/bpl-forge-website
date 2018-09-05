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
import { nextMsTimestamp } from '../domain/util/time';


export default class SlotStore {
  completedSlots = []
  hasCompletedSlotsForRound = false
  isAwaitingBlock = true
  isAwaitingSlot = true
  roundSlots = new Map()
  slotInProcess = null
  upcomingSlots = []
  unprocessedSlots = []

  constructor(blockStore, delegateStore, roundStore) {
    this.blockStore = blockStore
    this.delegateStore = delegateStore
    this.roundStore = roundStore
  }

  async init() {
    log('Initializing Slot Store.')
    await when(() => this.roundStore.hasNewRound && this.delegateStore.hasLoadedDelegates)

    const result = getSlotsFromInitialData(this.roundStore.newRound, this.delegateStore)    
    this.watchForNextBlock()
    this.watchForUnprocessedSlot()

    runInAction(() => {
      this.completedSlots.replace(result.completed)
      this.upcomingSlots.replace(result.upcoming)

      this.completedSlots.forEach(s => this.roundSlots.set(s.slot, s))
      this.upcomingSlots.forEach(s => this.roundSlots.set(s.slot, s))
    }) 
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
    return this.unprocessedSlots.length + this.upcomingSlots.length
  }

  get successfulForgeCount() {
    return this.completedSlots.filter(s => !s.hasMissedBlock).length
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
  successfulForgeCount: computed,
  upcomingSlots: observable,
  unprocessedSlots: observable,
})
