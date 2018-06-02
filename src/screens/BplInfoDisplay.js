import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
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

@inject('ui')
@observer
class BplInfoDisplay extends Component {
  onFixedRewardChange = (_, isChecked) => {
    this.props.ui.setIsUsingFixedReward(isChecked)
  }

  render() {
    const { classes, ui } = this.props

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
              <MarketCap />
              <BlockReward />

              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={ui.isUsingFixedReward}
                    onChange={this.onFixedRewardChange}
                    value="isIncludingFixedReward"
                  />
                }
                label="Include fixed reward"
              />
            </ItemGrid>

            <ItemGrid xs={12} sm={6}>
              <EstimatedReward />
            </ItemGrid>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(tasksCardStyle)(BplInfoDisplay)
