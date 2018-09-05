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
            Round Progress
          </Typography>
          <Typography variant="subheading">
            Remaining Slots: {slotStore.remainingSlotCount}
          </Typography>
          <Typography variant="subheading">
            Successful Forges: {slotStore.successfulForgeCount}
          </Typography>
          <Typography variant="subheading">
            Missed Blocks: {slotStore.missedBlockCount}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default inject('slotStore')(observer(RoundStats))
