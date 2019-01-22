import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Grid, Typography, } from '@material-ui/core'


import DelegateActivity from './DelegateActivity'
import DelegateInfo from './DelegateInfo'


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
              <Typography variant="headline">
                {`Delegate - ${delegateStore.activeDelegate.username}`}
              </Typography>
              <DelegateInfo />
              <DelegateActivity />
            </Grid>
          )
        })}
        </Grid>
      </React.Fragment>
    )
  }
}

export default inject('delegateStore')(observer(DelegateScreen))

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
