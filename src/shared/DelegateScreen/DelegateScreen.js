import React, { Component } from 'react'

import { Grid } from '@material-ui/core'
import { inject, observer } from 'mobx-react'



export class DelegateScreen extends Component {
  async componentDidMount() {
    const { match } = this.props
    console.log(match.params.address)
  }

  render() {
    const { match } = this.props

    return (
      <React.Fragment>
        <Grid container>
          <Grid item>
            Delegate - {match.params.address}
          </Grid>

        </Grid>
      </React.Fragment>
    )
  }
}

export default inject('roundStore')(observer(DelegateScreen))

/*
        <Grid container>
          <ItemGrid xs={12} sm={8}>
            <RegularCard
              cardTitle={title}
              cardSubtitle=""
              content={
                selectedDelegateStore.hasSelectedDelegate ? (
                  <DelegateInfo />
                ) : (
                  <div>No delegate</div>
                )
              }
            />
          </ItemGrid>

          <ItemGrid xs={12} sm={4}>
            <BplPrice />
            <EstimatedReward />
          </ItemGrid>
        </Grid>
        <DelegateActivity />
*/
