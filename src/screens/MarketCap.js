import React, { Fragment } from 'react'
import { inject, observer } from 'mobx-react'

import toCurrencyFormat from '../util/toCurrencyFormat'

export default inject('ui')(
  observer(({ ui }) => (
    <Fragment>
      <h2>Market Cap</h2>
      <h3>{toCurrencyFormat(ui.marketCap, ui.currency)}</h3>
    </Fragment>
  ))
)
