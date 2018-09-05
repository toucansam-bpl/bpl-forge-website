import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Grid, Typography, } from '@material-ui/core'

import CompletedSlots from './CompletedSlots'
import RoundStats from './RoundStats'
import UpcomingSlots from './UpcomingSlots'

class RoundScreen extends Component {
  render() {
    const { roundStore, slotStore, } = this.props

    return (
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="headline">
            Forging Round 
            {roundStore.hasNewRound ? ` ${roundStore.newRound.roundNumber}` : null}
            {slotStore.hasCompletedSlotsForRound ? ' - Complete' : ' - In process'}
          </Typography>
          <CompletedSlots />
        </Grid>

        <Grid item xs={3}>
          <Typography variant="headline">
            Upcoming Forgers
          </Typography>
          <UpcomingSlots />
        </Grid>

        <Grid item xs={3}>
          <RoundStats />
        </Grid>
      </Grid>
    )
  }
}

export default inject('roundStore', 'slotStore')(observer(RoundScreen))
