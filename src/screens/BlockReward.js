import React, { Fragment } from 'react'

import toCryptoFormat from '../util/toCryptoFormat'

export default ({ blockReward }) => (
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
    <h3>{toCryptoFormat(blockReward)} BPL</h3>
  </Fragment>
)
