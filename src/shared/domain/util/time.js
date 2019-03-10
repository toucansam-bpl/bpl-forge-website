export const blockInterval = 15
export const blockIntervalInMs = blockInterval * 1000
const epochTimeUtc = Date.UTC(2017, 2, 21, 13, 0, 0, 0)
const epochSeconds = Math.floor(epochTimeUtc / 1000)


export const currentMsTimestamp = () =>
  Date.now()

export const fromApiToMs = apiTimestamp =>
  (apiTimestamp + epochSeconds) * 1000

export function getApiTimestamp() {
  const currentSeconds = Math.floor(currentMsTimestamp() / 1000)

  return currentSeconds - epochSeconds
}

export const nextMsTimestamp = msTimestamp =>
  msTimestamp + blockIntervalInMs

export function getTimestamp(apiTimestamp) {
  return (apiTimestamp + epochSeconds) * 1000
}
