import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Grid, Typography, } from '@material-ui/core'

import RoundProgress from './RoundProgress'
import RoundSlots from './RoundSlots'
import RoundStats from './RoundStats'


class RoundScreen extends Component {
  render() {
    const { roundStore, slotStore, } = this.props

    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3">
            Current Forging Round 
            {roundStore.hasNewRound ? ` ${roundStore.newRound.roundNumber}` : null}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <RoundProgress />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">
            Rewards
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">
            Eh?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <RoundSlots />
        </Grid>
      </Grid>
    )
  }
}

export default inject('roundStore', 'slotStore')(observer(RoundScreen))
