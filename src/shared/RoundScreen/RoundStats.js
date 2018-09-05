import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Card, CardContent, Typography, } from '@material-ui/core'


class RoundStats extends Component {
  render() {
    const { slotStore, } = this.props

    return (
      <Card>
        <CardContent>
          <Typography variant="headline">
            Round Stats
          </Typography>
          <Typography variant="subheading">
            Total forged this round: {slotStore.totalForgedAmount}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default inject('slotStore')(observer(RoundStats))
