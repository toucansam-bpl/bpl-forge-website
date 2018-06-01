import Big from 'big-js'

const blocksPerDay = Big(4 * 60 * 24)
const blocksPerWeek = blocksPerDay.times(7)
const blocksPerMonth = blocksPerDay.times(30.41) // Average days per month in non-leap year
const millisecondsPerDay = 1000 * 60 * 60 * 24
const totalDelegateCount = 201

function getTimeSpanDays(timeSpan) {
  if (timeSpan === 'Per Day') return blocksPerDay
  if (timeSpan === 'Per Week') return blocksPerWeek
  if (timeSpan === 'Per Month') return blocksPerMonth
  return Big((Date.UTC(2019, 0) - Date.now()) / millisecondsPerDay).times(
    blocksPerDay
  )
}

export default (blockReward, timeSpan) => {
  return blockReward.times(getTimeSpanDays(timeSpan)).div(totalDelegateCount)
}
