import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Card, CardContent, Grid, Typography, } from '@material-ui/core'


class RoundProgress extends Component {
  render() {
    const { blockStore, roundStore, } = this.props

    return (
      <Card>
        <CardContent>
          <Grid container direction="column" spacing={8}>
            <Grid item>
              <Typography variant="subtitle1">
                Round Status: In Progress
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Current Height: {blockStore.lastProcessedBlockHeight}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Start Height: {roundStore.startHeight}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                End Height: {roundStore.endHeight}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

export default inject('blockStore', 'roundStore')(observer(RoundProgress))
