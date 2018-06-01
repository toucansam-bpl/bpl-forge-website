import fetch from 'node-fetch'

export default class BitApi {
  async getCurrentSupply(currentPrices) {
    const res = await fetch(
      'https://bit.blockpool.io/wallet/utilities/bpl/supply'
    )
    return res.json()
  }
}
