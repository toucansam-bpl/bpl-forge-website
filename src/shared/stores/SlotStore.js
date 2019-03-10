import Big from 'big-js'
import { action,
         computed, 
         decorate,
         observable,
         runInAction,
         when,
       } from 'mobx'
import { task } from 'mobx-task'

import { delegateCount } from '../domain/util/delegates'
import { log } from '../domain/util/logger'
import { createSlotFromBlock, basicSlot, getSlotsFromActiveDelegates } from './slotFactory'
import { blockInterval, nextMsTimestamp, fromApiToMs, } from '../domain/util/time'


export default class SlotStore {
  completedSlots = []
  roundSlots = new Map()
  upcomingSlots = []

  constructor(nodeApi, roundStore) {
    this.nodeApi = nodeApi
    this.roundStore = roundStore

    when(() => this.roundStore.isReady, () => this.init())
  }

  async init() {
    log('Initializing Slot Store.')

    const lastBlockOfLastRound = await this.nodeApi.getLastBlockOfRound(this.roundStore.round - 1)

    log('Generating forging list')

    console.log('last block of last round', lastBlockOfLastRound)
    const lastProcessedTimestamp = fromApiToMs(lastBlockOfLastRound.timestamp)
    const slots = getSlotsFromActiveDelegates(this.roundStore.activeDelegates, lastProcessedTimestamp)

    slots.forEach(s => this.roundSlots.set(s.slot, {
      slotNumber: s.slot,
      publicKey: s.publicKey,
    }))

    const processedSlots = this.roundStore.roundBlocks.reduce((all, block) => {
      const { completed, upcoming } = this.processReceivedBlock(all.completed, all.upcoming, block)
      all.completed = completed
      all.lastProcessedHeight = block.height
      all.upcoming = upcoming
      return all
    }, {
      completed: [],
      lastProcessedHeight: lastBlockOfLastRound.height,
      upcoming: slots,
    })
    
    runInAction(() => {
      this.completedSlots.replace(processedSlots.completed)
      this.upcomingSlots.replace(processedSlots.upcoming)
      this.processNextBlocks(processedSlots.lastProcessedHeight)
    }) 
  }

  getSlotNumber(blockTimestamp) {
		return Math.floor(blockTimestamp / blockInterval)
	}

  getRoundSlot(totalSlot) {
    // From BPL-node code
    return this.roundSlots.get(totalSlot % delegateCount)
  }

  async processNextBlocks(lastProcessedHeight) {
    for await (const block of this.roundStore.blocks(lastProcessedHeight + 1)) {
      let { completed, upcoming } = this.processReceivedBlock(this.completedSlots, this.upcomingSlots, block)
      runInAction(() => {
        this.completedSlots.replace(completed)
        this.upcomingSlots.replace(upcoming)
      })
    }
  }

  processReceivedBlock(completedSlots, upcomingSlots, block) {
    const completed = completedSlots.slice(0)
    const upcoming = upcomingSlots.slice(0)
    let hasFoundForger = false

    while (!hasFoundForger) {
      let slot = upcoming.shift()
      let completedSlot = createSlotFromBlock(slot, block)
      completed.push(completedSlot)
  
      if(completedSlot.hasMissedBlock) {
        let totalSlotCount = upcoming.length + completed.length + 1
        let roundSlot = this.getRoundSlot(totalSlotCount)
        let matchingDelegate = this.roundStore.activeDelegates.get(roundSlot.publicKey)
        let lastSlot = upcoming[upcoming.length - 1] || slot
        upcoming.push(basicSlot(totalSlotCount, matchingDelegate, nextMsTimestamp(lastSlot.timestamp)))
      } else {
        hasFoundForger = true
      }
    }

    return { completed, upcoming }
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
  processReceivedBlock: action,
  remainingSlotCount: computed,
  slots: computed,
  successfulForgeCount: computed,
  totalForgedAmount: computed,
  upcomingSlots: observable,
})
