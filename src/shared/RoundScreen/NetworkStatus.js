import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Card, CardContent, Grid, Typography, } from '@material-ui/core'


class NetworkStatus extends Component {
  render() {
    const { networkStore, } = this.props

    return (
      <Card>
        <CardContent>
          <Grid container direction="column" spacing={8}>
            <Grid item>
              <Typography variant="subtitle1">
                Network Height: {networkStore.networkHeight}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Seed Status: {`${networkStore.seedStatus.ok} / ${networkStore.seedStatus.total}`}
              </Typography>

              <ul>
                {networkStore.seedNodes.map(n => {
                  return (
                    <li>
                      {`${n.server} - ${n.height}`}
                    </li>
                  )
                })}
              </ul>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

export default inject('networkStore')(observer(NetworkStatus))
