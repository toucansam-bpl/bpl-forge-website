import React, { Component, Fragment } from 'react'

import { Grid } from '@material-ui/core'
import { RegularCard, Table, ItemGrid } from 'components'
import { inject, observer } from 'mobx-react'

import BplPrice from '../BplPrice'
import DelegateActivity from './DelegateActivity'
import DelegateInfo from './DelegateInfo'
import EstimatedReward from './EstimatedReward'

@inject('selectedDelegateStore')
@observer
export default class DelegateScreen extends Component {
  async componentDidMount() {
    const { selectedDelegateStore, match } = this.props
    selectedDelegateStore.setSelectedAddress(match.params.address)
  }

  render() {
    const { selectedDelegateStore } = this.props
    const title = selectedDelegateStore.hasSelectedDelegate
      ? `Delegate ${selectedDelegateStore.selectedDelegate.username}`
      : 'Unfound Delegate'

    return (
      <Fragment>
        <Grid container>
          <ItemGrid xs={12} sm={9}>
            <RegularCard
              cardTitle={title}
              cardSubtitle=""
              content={
                selectedDelegateStore.hasSelectedDelegate ? (
                  <DelegateInfo />
                ) : (
                  <div>No delegate</div>
                )
              }
            />
          </ItemGrid>

          <ItemGrid xs={12} sm={3}>
            <BplPrice />
            <EstimatedReward />
          </ItemGrid>
        </Grid>
        <DelegateActivity />
      </Fragment>
    )
  }
}
