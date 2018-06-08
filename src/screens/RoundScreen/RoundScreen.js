import React, { Component } from 'react'

import { Grid } from '@material-ui/core'
import { RegularCard, Table, ItemGrid } from 'components'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import toCryptoFormat from '../../util/toCryptoFormat'
import fromApiString from '../../util/fromApiString'

@inject('delegateStore')
@observer
export default class RoundScreen extends Component {
  render() {
    const { delegateStore } = this.props
    const { activeDelegates } = delegateStore

    return (
      <Grid container>
        <RegularCard
          cardTitle="Active Delegates"
          cardSubtitle=""
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={['Rank', 'Delegate', 'Address', 'Votes']}
              tableData={activeDelegates.map(d => [
                d.rate.toString(),
                d.username,
                <Link to={`delegate/${d.address}`}>{d.address}</Link>,
                toCryptoFormat(fromApiString(d.vote)),
              ])}
            />
          }
        />
      </Grid>
    )
  }
}

/*
import { Router, Route, Switch } from 'react-router-dom'

        <ItemGrid xs={12} sm={3}>
          <DelegatesListedBySlotInRound />
          <BplPrice />
        </ItemGrid>

        <ItemGrid xs={12} sm={9}>
          <BplInfoDisplay />
        </ItemGrid>
*/
