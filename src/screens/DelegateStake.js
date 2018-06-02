import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

import { TextField } from '@material-ui/core'
import { RegularCard } from 'components'

@inject('ui')
@observer
export default class DelegateStake extends Component {
  onStakeChange = evt => {
    const { ui } = this.props

    ui.setStake(evt.target.value)
  }

  render() {
    const { ui } = this.props

    return (
      <RegularCard
        raised
        headerColor="purple"
        cardTitle="Delegate Stake (BPL)"
        content={
          <Fragment>
            <TextField
              type="number"
              onChange={this.onStakeChange}
              value={ui.delegateStake.toString()}
            />
          </Fragment>
        }
        footer={
          <div>
            Stake includes BPL held by the delegate as well as BPL from all
            addresses voting for the delegate.
          </div>
        }
      />
    )
  }
}
