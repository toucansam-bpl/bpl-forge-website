import fetch from 'node-fetch'
import qs from 'querystring'

export default class PriceApi {
  async getBplPrice(currentPrices) {
    const query = {
      fsym: 'BPL',
      tsyms: Object.keys(currentPrices).join(','),
    }
    const res = await fetch(
      `https://min-api.cryptocompare.com/data/price?${qs.stringify(query)}`
    )
    return res.json()
  }
}
