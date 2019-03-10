import { fromApiString } from '../domain/util/format'
import { byDescending } from '../domain/util/sorters'
import { currentMsTimestamp, fromApiToMs, nextMsTimestamp } from '../domain/util/time'

const delegateCount = 201

export function createSlotFromBlock(slot, block) {
  let hasMissedBlock = !block || slot.publicKey !== block.generatorPublicKey
  let blockProps = hasMissedBlock ? {} : {
    totalForged: fromApiString(block.totalForged),
  }
  return {
    ... slot,
    hasMissedBlock,
    ... blockProps,
    hasBeenCompleted: true,
  }
}

export function completedSlotFromDelegate(slot, delegate, timestamp) {
  const blockProps = slot.hasMissedBlock ? {} : {
    totalForged: fromApiString(slot.totalForged),
  }
  return {
    ... basicSlot(slot.roundSlot, delegate, timestamp),
    hasBeenCompleted: true,
    hasMissedBlock: slot.hasMissedBlock,
    ... blockProps,
  }
}

export function basicSlot(number, delegate, timestamp) {
  return {
    address: delegate.address,
    hasBeenCompleted: false,
    name: delegate.username,
    number,
    publicKey: delegate.publicKey,
    rank: delegate.rate,
    slot: number,
    timestamp,
    vote: fromApiString(delegate.vote),
  }
}

export function getSlotsFromActiveDelegates(activeDelegates, lastProcessedTimestamp) {
  let timestamp = nextMsTimestamp(lastProcessedTimestamp)
  let slotNumber = 1
  const upcomingSlots = []

  for (let delegate of activeDelegates.values()) {
    upcomingSlots.push(basicSlot(slotNumber, delegate, timestamp))

    timestamp = nextMsTimestamp(timestamp)
    slotNumber += 1
  }

  return upcomingSlots
}

export default function getSlotsFromInitialData(forgingInfo, blockInfo, delegates) {

  const blocksToProcess = blockInfo.blocks.concat([])
  let result = {
    blocksToProcess,
    hasProcessedAllSlots: false,
    lastProcessedRoundSlot: 0,
    lastProcessedGlobalSlot: forgingInfo.firstSlot - 1,
    lastTimestamp: nextMsTimestamp(fromApiToMs(blockInfo.endOfLastRoundTimestamp)),
    remainingBlockCount: delegateCount - blocksToProcess.length,
    slots: [],
  }

  while (!result.hasProcessedAllSlots || result.remainingBlockCount > 0) {
    result = forgingInfo.forgers.reduce((all, forger) => {
      const globalSlot = all.lastProcessedGlobalSlot + 1
      all.hasProcessedAllSlots = globalSlot >= forgingInfo.currentSlot
      if (all.hasProcessedAllSlots && all.remainingBlockCount === 0) return all

      const roundSlot = all.lastProcessedRoundSlot + 1
      const slotTimestamp = nextMsTimestamp(all.lastTimestamp)
      let slot = basicSlot(roundSlot, delegates.get(forger), slotTimestamp)

      if (!all.hasProcessedAllSlots) {
        let block = all.blocksToProcess[0]
        slot = createSlotFromBlock(slot, block)
  
        if (!slot.hasMissedBlock) {
          all.blocksToProcess.shift()
        }
      } else {
        all.remainingBlockCount -= 1
      }

      all.lastProcessedRoundSlot = roundSlot
      all.lastProcessedGlobalSlot = globalSlot
      all.lastTimestamp = slotTimestamp
      all.slots.push(slot)
      return all
    }, result)
  }

  return result
}
