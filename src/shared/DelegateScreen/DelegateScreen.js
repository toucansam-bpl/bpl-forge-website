import React, { Component } from 'react'

import { Grid } from '@material-ui/core'
import { inject, observer } from 'mobx-react'



export class DelegateScreen extends Component {
  async componentDidMount() {
    const { delegateStore, match } = this.props
    delegateStore.setActiveDelegate(match.params.address)
  }

  render() {
    const { delegateStore } = this.props

    return (
      <React.Fragment>
        <Grid container>
        {delegateStore.setActiveDelegate.match({
          pending: () => <div>Loading, please wait..</div>,
          rejected: (err) => <div>Error: {err.message}</div>,
          resolved: () => (
            <Grid item>
              Delegate - {delegateStore.activeDelegate.address}
            </Grid>
          )
        })}
        </Grid>
      </React.Fragment>
    )
  }
}

export default inject('roundStore', 'delegateStore')(observer(DelegateScreen))

/*
        <Grid container>
          <ItemGrid xs={12} sm={8}>
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

          <ItemGrid xs={12} sm={4}>
            <BplPrice />
            <EstimatedReward />
          </ItemGrid>
        </Grid>
        <DelegateActivity />
*/
