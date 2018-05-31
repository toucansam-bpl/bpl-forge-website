import React, { Fragment } from 'react'

import toCryptoFormat from '../util/toCryptoFormat'
import toCurrencyFormat from '../util/toCurrencyFormat'

export default ({ bpl, currency }) => (
  <Fragment>
    <h2>Estimated Reward</h2>
    <h1>{toCurrencyFormat(currency)}</h1>
    <h2>{toCryptoFormat(bpl)} BPL</h2>
  </Fragment>
)
