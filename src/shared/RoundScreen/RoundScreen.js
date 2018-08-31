import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import CompletedSlots from './CompletedSlots'
import UpcomingSlots from './UpcomingSlots'

export default class RoundScreen extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={8}>
          <CompletedSlots />
        </Grid>

        <Grid item xs={4}>
          <UpcomingSlots />
        </Grid>
      </Grid>
    )
  }
}
