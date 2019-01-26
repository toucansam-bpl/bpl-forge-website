import Big from 'big-js'
import fetch from 'node-fetch'
import { log } from '../domain/util/logger'
import { action,
  computed, 
  decorate,
  observable,
  onBecomeObserved,
  onBecomeUnobserved,
  when,
} from 'mobx'

const priceInterval = 5 * 60 * 1000
const priceUrl = 'https://min-api.cryptocompare.com/data/price?fsym=BPL&tsyms=BTC,USD,GBP,EUR,CNY,AUD'


export default class PriceStore {
  currency = 'USD'
  listener
  prices = { USD: '', EUR: '', }
  
  constructor() {
    onBecomeObserved(this, 'price', this.resume)
    onBecomeUnobserved(this, 'price', this.suspend)
  }

  async fetchPrice() {
    const priceResponse = await fetch(priceUrl)
    const priceResult = await priceResponse.json()

    this.prices = priceResult
    log(this.currency, priceResult)
  }

  get price() {
    return this.prices[this.currency]
  }

  resume = () => {
    log('Resuming price listener')
    this.listener = setInterval(() => this.fetchPrice(), priceInterval)
  }

  suspend = () => {
    log('Suspening price listener')
    clearInterval(this.listener)
  }

  setCurrency(currency) {
    this.currency = currency
  }
}

decorate(PriceStore, { 
  currency: observable,
  fetchPrice: action,
  price: computed,
  prices: observable,
})
