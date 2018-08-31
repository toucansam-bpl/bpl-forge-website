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

export function completedSlotFromDelegate(slot, delegate) {
  const blockProps = slot.hasMissedBlock ? {} : {
    totalForged: fromApiString(slot.totalForged),
  }
  return {
    ... basicSlot(slot, delegate),
    hasMissedBlock: slot.hasMissedBlock,
    ... blockProps,
  }
}

export function basicSlot(slot, delegate) {
  return {
    name: delegate.username,
    publicKey: slot.publicKey,
    rank: delegate.rate,
    slot: slot.roundSlot || slot.blockRoundSlot,
    vote: fromApiString(delegate.vote),
  }
}

export default function createSlots(currentRound, delegatesById) {
  let result = {
    completed: [],
    lastTimestamp: currentMsTimestamp(),
    upcoming: [],
  }

  result = currentRound.delegateActivity.reduce((all, slot) => {
    all.lastTimestamp = slot.hasMissedBlock
      ? nextMsTimestamp(all.lastTimestamp)
      : fromApiToMs(slot.timestamp)
    all.completed.push({
      ... completedSlotFromDelegate(slot, delegatesById[slot.publicKey]),
      
      timestamp: all.lastTimestamp,
    })
    return all
  }, result)

  result = currentRound.expectedForgers.reduce((all, slot) => {
    all.lastTimestamp = nextMsTimestamp(all.lastTimestamp)
    all.upcoming.push({
      ... basicSlot(slot, delegatesById[slot.publicKey]),
      
      timestamp: all.lastTimestamp,
    })
    return all
  }, result)

  result.completed.sort(byDescending('slot'))

  return result
}
