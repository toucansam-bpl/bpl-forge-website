import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Card, CardContent, Grid, Typography, } from '@material-ui/core'


class RoundProgress extends Component {
  render() {
    const { roundStore, } = this.props

    return (
      <Card>
        <CardContent>
        {roundStore.init.match({
          pending: () => <div>Loading, please wait..</div>,
          rejected: (err) => <div>Error: {err.message}</div>,
          resolved: () => (
            <Grid container direction="column" spacing={8}>
              <Grid item>
                <Typography variant="subtitle1">
                  Round Status: In Progress
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  Current Height: {roundStore.currentHeight}
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
          )}
        )}
        </CardContent>
      </Card>
    )
  }
}

export default inject('roundStore')(observer(RoundProgress))
