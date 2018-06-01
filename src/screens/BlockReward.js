import React, { Fragment } from 'react'
import { inject, observer } from 'mobx-react'

import toCryptoFormat from '../util/toCryptoFormat'

export default inject('ui')(
  observer(({ ui }) => (
    <Fragment>
      <div style={{ marginTop: '25px', position: 'relative' }}>
        <h2>
          Block Reward
          <i
            className="material-icons"
            data-toggle="modal"
            data-target="#block-reward-details"
          >
            help
          </i>
        </h2>
      </div>
      <h3>{toCryptoFormat(ui.blockReward)} BPL</h3>
    </Fragment>
  ))
)
