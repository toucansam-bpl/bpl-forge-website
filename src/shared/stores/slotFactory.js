import { fromApiString } from '../domain/util/format'
import { byDescending } from '../domain/util/sorters'
import { currentMsTimestamp, fromApiToMs, nextMsTimestamp } from '../domain/util/time'

export function createSlotFromBlock(slot, block) {
  let hasMissedBlock = slot.publicKey !== block.generatorPublicKey
  let blockProps = hasMissedBlock ? {} : {
    totalForged: fromApiString(block.totalForged),
  }
  return {
    ... slot,
    hasMissedBlock,
    ... blockProps,
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

export default function getSlotsFromInitialData(currentRound, delegates) {
  let result = {
    completed: [],
    lastTimestamp: currentMsTimestamp(),
    slots: [],
    upcoming: [],
  }

  result = currentRound.delegateActivity.reduce((all, slot) => {
    all.lastTimestamp = slot.hasMissedBlock
      ? nextMsTimestamp(all.lastTimestamp)
      : fromApiToMs(slot.timestamp)
    const newSlot = completedSlotFromDelegate(slot, delegates.get(slot.publicKey), all.lastTimestamp)
    all.completed.push(newSlot)
    all.slots.push(newSlot)
    return all
  }, result)

  result = currentRound.expectedForgers.reduce((all, slot) => {
    all.lastTimestamp = nextMsTimestamp(all.lastTimestamp)
    const newslot = basicSlot(slot.blockRoundSlot, delegates.get(slot.publicKey), all.lastTimestamp)
    all.upcoming.push(newslot)
    all.slots.push(newslot)
    return all
  }, result)

  result.completed.sort(byDescending('slot'))

  return result
}
