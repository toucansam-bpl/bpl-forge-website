import React, { Component } from 'react'

import Big from 'big-js'
import { ItemGrid } from 'components'

import {
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grid,
  withStyles,
} from '@material-ui/core'

import tasksCardStyle from 'assets/jss/material-dashboard-react/tasksCardStyle'

import DateRangeTabs from './DateRangeTabs'
import MarketCap from './MarketCap'
import BlockReward from './BlockReward'
import EstimatedReward from './EstimatedReward'

class BplInfoDisplay extends Component {
  state = {
    blockReward: Big(1.00002345),
    estimatedRewardBpl: Big(5.00023458),
    estimatedRewardCurrency: Big(850.23),
    isIncludingFixedReward: false,
    marketCap: Big(3456789.0),
  }

  handleFixedRewardChange(isIncludingFixedReward) {
    this.setState(s => Object.assign({}, s, { isIncludingFixedReward }))
  }

  render() {
    const { classes } = this.props

    return (
      <Card raised>
        <CardHeader
          classes={{
            root: classes.cardHeader,
            title: classes.cardTitle,
            content: classes.cardHeaderContent,
          }}
          action={<DateRangeTabs />}
        />

        <CardContent>
          <Grid container>
            <ItemGrid xs={12} sm={6}>
              <MarketCap marketCap={this.state.marketCap} />
              <BlockReward blockReward={this.state.blockReward} />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedA}
                    onChange={(_, isChecked) =>
                      this.handleFixedRewardChange(isChecked)
                    }
                    value="isIncludingFixedReward"
                  />
                }
                label="Include fixed reward"
              />
            </ItemGrid>

            <ItemGrid xs={12} sm={6}>
              <EstimatedReward
                bpl={this.state.estimatedRewardBpl}
                currency={this.state.estimatedRewardCurrency}
              />
            </ItemGrid>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(tasksCardStyle)(BplInfoDisplay)
