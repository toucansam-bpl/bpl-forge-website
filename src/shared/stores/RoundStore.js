import { action, computed, decorate, observable, onBecomeObserved, onBecomeUnobserved, runInAction } from 'mobx'
import { task } from 'mobx-task'

import { currentMsTimestamp, fromApiToMs, nextMsTimestamp } from '../domain/util/time'

const blockInterval = 15 * 1000
const byAscending = prop => (a, b) => a[prop] > b[prop] ? 1 : b[prop] > a[prop] ? -1 : 0
const byDescending = prop => (a, b) => a[prop] > b[prop] ? -11 : b[prop] > a[prop] ? 1 : 0


export default class RoundStore {
  constructor(nodeApi) {
    this.nodeApi = nodeApi

    onBecomeObserved(this, 'outgoingUpcomingSlots', this.resume)
    onBecomeUnobserved(this, 'outgoingUpcomingSlots', this.suspend)
  }

  resume = () => {
    console.log('Resuming block listener.')
    this.interval = setInterval(() => this.listenForNewBlocks(), blockInterval)
  }

  suspend = () => {
    console.log('Suspending block listener.')
    clearInterval(this.interval)
  }

  completedSlots = []
  currentHeight
  hasIncomingSlots = false
  hasOutgoingSlots = false
  incomingCompletedSlots = []
  interval
  outgoingUpcomingSlots = []
  upcomingSlots = []

  async init() {
    const currentRound = await this.nodeApi.getCurrentRound()

    const delegates = await this.nodeApi.getActiveDelegates()
    const delegatesById = delegates.delegates.reduce((all, delegate) => {
      all[delegate.publicKey] = delegate.username
      return all
    }, {})

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
    this.currentHeight = result.currentHeight

    runInAction(() => {
      this.completedSlots.replace(result.completed)
      this.upcomingSlots.replace(result.upcoming)
    }) 
  }

  async listenForNewBlocks() {
    const blocks = await this.nodeApi.getBlocks(0, 5)
    const newBlocks = blocks.blocks.filter(b => b.height > this.currentHeight)
    newBlocks.sort(byAscending('height'))

    if (newBlocks.length) {
      this.addBlocks(newBlocks)
    }
  }

  addBlocks(blocks) {
    console.log(`New blocks (${blocks.length}) added at height ${this.currentHeight}`, blocks)
    
    blocks.forEach(block => {
      let hasMissedBlock = true
      while (hasMissedBlock && this.upcomingSlots.length > 0) {
        let slot = this.upcomingSlots.shift()
        console.log(slot.publicKey, block.publicKey)
        hasMissedBlock = slot.publicKey !== block.generatorPublicKey
        let blockProps = hasMissedBlock ? {} : {
          totalForged: block.totalForged
        }

        console.log('Adding slot', slot)
        this.outgoingUpcomingSlots.push({
          ... slot,
          hasMissedBlock,
          ... blockProps,
        })
      } 

      this.currentHeight = block.height
      console.log(`Updated current height to ${this.currentHeight}`)
    })

    setTimeout(() => this.startSlotTransfer(), 0)
  }

  startSlotTransfer() {
    console.log('Starting slot transfer')
    this.hasOutgoingSlots = true
  }

  transferSlots() {
    console.log('Transferring slots')
    let slot
    while (slot = this.outgoingUpcomingSlots.pop()) {
      this.incomingCompletedSlots.push(slot)
    }
    this.hasOutgoingSlots = false

    setTimeout(() => this.startTransferCompletion(), 0)
  }

  startTransferCompletion() {
    console.log('Starting slot transfer completion')
    this.hasIncomingSlots = true
  }

  completeSlotTransition() {
    console.log('Completing slot transition.')
    let slot
    const toTransfer = []
    while (slot = this.incomingCompletedSlots.shift()) {
      toTransfer.push(slot)
    }
    this.completedSlots.replace(toTransfer.concat(this.completedSlots))
    this.hasIncomingSlots = false
  }
}

decorate(RoundStore, {
  addBlocks: action,
  completedSlots: observable,
  completeSlotTransition: action,
  hasIncomingSlots: observable,
  hasOutgoingSlots: observable,
  incomingCompletedSlots: observable,
  init: task,
  outgoingUpcomingSlots: observable,
  startSlotTransfer: action,
  startTransferCompletion: action,
  transferSlots: action,
  upcomingSlots: observable,
})
