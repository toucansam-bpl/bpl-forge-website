import Big from 'big-js'

export default rawBplValue => {
  return Big(rawBplValue).div(100000000)
}
