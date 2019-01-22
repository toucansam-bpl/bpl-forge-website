import Big from 'big-js'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.locale(en)

// Create relative date/time formatter.
const timeAgo = new TimeAgo('en-US')

export function fromApiString(bplString) {
  return Big(bplString).div('100000000')
}

export function toFixed(big, digits = 0) {
  return big.toFixed(digits)
}

export function toFixedLocale(big, digits = 0) {
  return Number(big.toFixed(digits)).toLocaleString()
}

export function toHowLong(timestamp) {
  return timeAgo.format(timestamp)
}
