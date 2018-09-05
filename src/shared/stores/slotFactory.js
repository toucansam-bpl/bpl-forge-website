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
    hasMissedBlock: slot.hasMissedBlock,
    ... blockProps,
  }
}

export function basicSlot(number, delegate, timestamp) {
  return {
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
    upcoming: [],
  }

  result = currentRound.delegateActivity.reduce((all, slot) => {
    all.lastTimestamp = slot.hasMissedBlock
      ? nextMsTimestamp(all.lastTimestamp)
      : fromApiToMs(slot.timestamp)
    all.completed.push(completedSlotFromDelegate(slot, delegates.get(slot.publicKey), all.lastTimestamp))
    return all
  }, result)

  result = currentRound.expectedForgers.reduce((all, slot) => {
    all.lastTimestamp = nextMsTimestamp(all.lastTimestamp)
    all.upcoming.push(basicSlot(slot.blockRoundSlot, delegates.get(slot.publicKey), all.lastTimestamp))
    return all
  }, result)

  result.completed.sort(byDescending('slot'))

  return result
}
