const epochTimeUtc = Date.UTC(2017, 2, 21, 13, 0, 0, 0)
const epochSeconds = Math.floor(epochTimeUtc / 1000)

export function getTimestamp() {
  const currentSeconds = Math.floor(Date.now() / 1000)

  return currentSeconds - epochSeconds
}

export function getMilliseconds(apiTimestamp) {
  return (apiTimestamp + epochSeconds) * 1000
}
