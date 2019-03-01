const delegateCount = 201

export const firstBlockHeightOfRound = roundNumber => getLastBlockHeightOfRound(roundNumber - 1) + 1
export const getLastBlockHeightOfRound = roundNumber => roundNumber * delegateCount
export const getRoundNumberFromHeight = height => Math.floor((height-1) / delegateCount) + 1
