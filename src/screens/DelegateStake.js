import React, { Component, Fragment } from 'react'

import { TextField } from '@material-ui/core'
import { RegularCard } from 'components'

export default class DelegateStake extends Component {
  state = {
    stake: 75000,
  }

  onStakeChange(stake) {
    this.setState(s => Object.assign({}, { stake }))
  }

  render() {
    return (
      <RegularCard
        raised
        headerColor="orange"
        cardTitle="Delegate Stake (BPL)"
        content={
          <Fragment>
            <TextField
              type="number"
              onChange={evt => this.onStakeChange(evt.target.value)}
              value={this.state.stake}
            />
          </Fragment>
        }
        statText="Stake includes BPL held by the delegate as well as BPL from all addresses voting for the delegate."
      />
    )
  }
}
