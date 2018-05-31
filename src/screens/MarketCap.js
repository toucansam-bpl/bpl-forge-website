import React, { Fragment } from 'react'

import toCurrencyFormat from '../util/toCurrencyFormat'

export default ({ marketCap }) => (
  <Fragment>
    <h2>Market Cap</h2>
    <h3>{toCurrencyFormat(marketCap)}</h3>
  </Fragment>
)
