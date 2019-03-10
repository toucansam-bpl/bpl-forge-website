import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Card, CardContent, Grid, Typography, } from '@material-ui/core'


class RoundProgress extends Component {
  render() {
    const { slotStore, } = this.props

    return (
      <Card>
        <CardContent>
        {slotStore.init.match({
          pending: () => <div>Loading, please wait..</div>,
          rejected: (err) => <div>Error: {err.message}</div>,
          resolved: () => (
            <Grid container direction="column" spacing={8}>
              <Grid item>
                <Typography variant="subtitle1">
                  Remaining Slots: {slotStore.remainingSlotCount}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Successful Forges: {slotStore.successfulForgeCount}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Missed Blocks: {slotStore.missedBlockCount}
                </Typography>
              </Grid>
            </Grid>
          )}
        )}
        </CardContent>
      </Card>
    )
  }
}

export default inject('slotStore')(observer(RoundProgress))
