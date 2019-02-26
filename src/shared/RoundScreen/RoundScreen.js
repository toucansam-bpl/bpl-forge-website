import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Grid, Typography, } from '@material-ui/core'

import NetworkStatus from './NetworkStatus'
import RoundProgress from './RoundProgress'
import RoundSlots from './RoundSlots'
import RoundStatus from './RoundStatus';


class RoundScreen extends Component {
  render() {
    const { roundStore, } = this.props

    return (
      <Grid container direction="column" spacing={24}>
        <Grid item xs={12}>
          <Typography variant="headline">
            Current Forging Round 
            {roundStore.hasNewRound ? ` ${roundStore.newRound.roundNumber}` : null}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={24}>
            <Grid item xs={3}>
              <NetworkStatus />
            </Grid>
            <Grid item xs={3}>
              <RoundStatus />
            </Grid>
            <Grid item xs={3}>
              <RoundProgress />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h5">
                Rewards
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <RoundSlots />
        </Grid>
      </Grid>
    )
  }
}

export default inject('roundStore')(observer(RoundScreen))
