
export const firstBlockHeightOfRound = roundNumber => getLastBlockHeightOfRound(roundNumber - 1) + 1
export const getLastBlockHeightOfRound = roundNumber => roundNumber * 201
export const getRoundNumberFromHeight = height => Math.floor((height-1) / slots.delegates) + 1
