import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Grid, Typography, } from '@material-ui/core'

import CompletedSlots from './CompletedSlots'
import UpcomingSlots from './UpcomingSlots'

class RoundScreen extends Component {
  render() {
    const { roundStore } = this.props

    return (
      <div>
        <Typography variant="headline">
          Forging Round {roundStore.hasNewRound ? roundStore.newRound.roundNumber : '--'}
        </Typography>
        <Grid container>
          <Grid item xs={8}>
            <CompletedSlots />
          </Grid>
  
          <Grid item xs={4}>
            <UpcomingSlots />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default inject('roundStore')(observer(RoundScreen))
