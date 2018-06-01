import React, { Fragment } from 'react'
import { inject, observer } from 'mobx-react'

import toCryptoFormat from '../util/toCryptoFormat'
import toCurrencyFormat from '../util/toCurrencyFormat'

export default inject('ui')(
  observer(({ ui }) => (
    <Fragment>
      <h2>Estimated Reward</h2>
      <h1>{toCurrencyFormat(ui.estimatedCurrencyReward, ui.currency)}</h1>
      <h2>{toCryptoFormat(ui.estimatedBplReward)} BPL</h2>
    </Fragment>
  ))
)
