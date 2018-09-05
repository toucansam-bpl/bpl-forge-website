import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Grid, Typography, } from '@material-ui/core'

import CompletedSlots from './CompletedSlots'
import RoundProgress from './RoundProgress'
import RoundStats from './RoundStats'
import UpcomingSlots from './UpcomingSlots'

class RoundScreen extends Component {
  render() {
    const { roundStore, slotStore, } = this.props
    const MiddleColumn = slotStore.hasCompletedSlotsForRound
      ? <RoundStats />        
      : <React.Fragment>
          <Typography variant="headline">
            Upcoming Forgers
          </Typography>
          <UpcomingSlots />
        </React.Fragment>

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
          {MiddleColumn}
        </Grid>
        <Grid item xs={3}>
          <RoundProgress />
        </Grid>
      </Grid>
    )
  }
}

export default inject('roundStore', 'slotStore')(observer(RoundScreen))
