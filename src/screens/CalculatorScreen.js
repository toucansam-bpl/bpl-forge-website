import React, { Component } from 'react'

import { Grid } from '@material-ui/core'
import { ItemGrid } from 'components'

import BplInfoDisplay from './BplInfoDisplay'
import BplPrice from './BplPrice'
import DelegateStake from './DelegateStake'

export default class CalculatorScreen extends Component {
  state = {
    value: 2,
  }

  render() {
    return (
      <Grid container>
        <ItemGrid xs={12} sm={3}>
          <DelegateStake />
          <BplPrice />
        </ItemGrid>

        <ItemGrid xs={12} sm={9}>
          <BplInfoDisplay />
        </ItemGrid>
      </Grid>
    )
  }
}
