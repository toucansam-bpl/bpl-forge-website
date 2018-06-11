import React, { Component } from 'react'

import { Grid } from '@material-ui/core'
import { RegularCard, Table, ItemGrid } from 'components'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import toCryptoFormat from '../../util/toCryptoFormat'
import fromApiString from '../../util/fromApiString'

@inject('selectedDelegateStore')
@observer
export default class DelegateActivity extends Component {
  render() {
    const { selectedDelegateStore } = this.props

    return (
      <Grid container>
        <ItemGrid xs={12} sm={6}>
          <RegularCard
            cardTitle="Latest Rewards"
            cardSubtitle=""
            content={
              <Table
                tableHeaderColor="primary"
                tableHead={['Date', 'Block', 'Amount']}
                tableData={selectedDelegateStore.rewardBlocks.map(b => [
                  b.timestamp,
                  b.id,
                  toCryptoFormat(fromApiString(b.reward)),
                ])}
              />
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6}>
          <RegularCard
            cardTitle="Latest Transactions"
            cardSubtitle=""
            content={
              <Table
                tableHeaderColor="primary"
                tableHead={['Date', 'From', 'To', 'Transaction', 'Amount']}
                tableData={selectedDelegateStore.transactions.map(t => [
                  t.timestamp,
                  t.recipientId,
                  t.senderId,
                  t.id,
                  toCryptoFormat(fromApiString(t.amount)),
                  toCryptoFormat(fromApiString(t.fee)),
                ])}
              />
            }
          />
        </ItemGrid>
      </Grid>
    )
  }
}
