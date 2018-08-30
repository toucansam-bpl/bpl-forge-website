import { action,
         computed, 
         decorate,
         observable,
         runInAction,
         when,
       } from 'mobx'
import { task } from 'mobx-task'

import { log } from '../domain/util/logger'
import { currentMsTimestamp, fromApiToMs, nextMsTimestamp } from '../domain/util/time'
import { byDescending } from '../domain/util/sorters'


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
      all[delegate.publicKey] = delegate.username
      return all
    }, {})

    await when(() => this.roundStore.hasNewRound)

    const result = getSlotsFromInitialData(this.roundStore.newRound, delegatesById)    
    this.currentHeight = result.currentHeight
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
        let hasMissedBlock = slot.publicKey !== all.block.generatorPublicKey
        let blockProps = hasMissedBlock ? {} : {
          totalForged: all.block.totalForged
        }
        all.hasFoundProcessedSlot = !hasMissedBlock
        all.unprocessedSlots.push({
          ... slot,
          hasMissedBlock,
          ... blockProps,
        })
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


function getSlotsFromInitialData(currentRound, delegatesById) {
  let result = {
    completed: [],
    currentHeight: currentRound.fromBlock - 1,
    round: currentRound.roundNumber,
    fromBlock: currentRound.fromBlock,
    lastTimestamp: currentMsTimestamp(),
    toBlock: currentRound.toBlock,
    upcoming: [],
  }

  result = currentRound.delegateActivity.reduce((all, delegate) => {
    if (delegate.hasMissedBlock) {
      all.lastTimestamp = nextMsTimestamp(all.lastTimestamp)
    } else {
      all.currentHeight = delegate.blockHeight
      all.lastTimestamp = fromApiToMs(delegate.timestamp)
    }
    all.completed.push({
      name: delegatesById[delegate.publicKey],
      hasMissedBlock: delegate.hasMissedBlock,
      publicKey: delegate.publicKey,
      slot: delegate.roundSlot,
      timestamp: all.lastTimestamp,
      totalForged: delegate.totalForged,
    })
    return all
  }, result)

  result = currentRound.expectedForgers.reduce((all, delegate) => {
    all.lastTimestamp = nextMsTimestamp(all.lastTimestamp)
    all.upcoming.push({
      name: delegatesById[delegate.publicKey],
      publicKey: delegate.publicKey,
      slot: delegate.blockRoundSlot,
      timestamp: all.lastTimestamp,
    })
    return all
  }, result)

  result.completed.sort(byDescending('slot'))

  return result
}