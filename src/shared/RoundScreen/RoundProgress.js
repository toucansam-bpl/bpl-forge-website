import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Card, CardContent, Typography, } from '@material-ui/core'


class RoundProgress extends Component {
  render() {
    const { roundStore, slotStore, } = this.props

    return (
      <Card>
        <CardContent>
          <Typography variant="subtitle1">
            Remaining Slots: {slotStore.remainingSlotCount}
          </Typography>
          <Typography variant="subtitle1">
            Successful Forges: {slotStore.successfulForgeCount}
          </Typography>
          <Typography variant="subtitle1">
            Missed Blocks: {slotStore.missedBlockCount}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default inject('roundStore', 'slotStore')(observer(RoundProgress))
