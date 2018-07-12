import React, { Component } from 'react'

import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import { RegularCard, Table as DashboardTable, ItemGrid } from 'components'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import { getMilliseconds } from '../../util/apiConverter'
import toCryptoFormat from '../../util/toCryptoFormat'
import fromApiString from '../../util/fromApiString'

@inject('selectedDelegateStore')
@observer
export default class DelegateActivity extends Component {
  render() {
    const { selectedDelegateStore: sds } = this.props
    const classes = {}

    return (
      <Grid container>
        <ItemGrid xs={12} sm={6}>
          <RegularCard
            cardTitle="Latest Rewards"
            cardSubtitle=""
            content={
              <DashboardTable
                tableHeaderColor="primary"
                tableHead={['Date', 'Block', 'Amount']}
                tableData={sds.rewardBlocks.map(b => [
                  new Date(getMilliseconds(b.timestamp)).toLocaleString(),
                  b.id,
                  toCryptoFormat(fromApiString(b.reward)).toLocaleString(),
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
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Transaction</TableCell>
                    <TableCell>From</TableCell>
                    <TableCell>To</TableCell>
                    <TableCell numeric>Amount</TableCell>
                    <TableCell numeric>Fee</TableCell>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sds.transactionsByDate.map(t => {
                    return (
                      <TableRow className={classes.row} key={t.id}>
                        <TableCell component="th" scope="row">
                          {t.id}
                        </TableCell>
                        <TableCell>{t.senderId}</TableCell>
                        <TableCell>{t.recipientId}</TableCell>
                        <TableCell numeric>
                          {toCryptoFormat(
                            fromApiString(t.amount)
                          ).toLocaleString()}
                        </TableCell>
                        <TableCell numeric>
                          {toCryptoFormat(fromApiString(t.fee))}
                        </TableCell>
                        <TableCell>
                          {new Date(
                            getMilliseconds(t.timestamp)
                          ).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            }
          />
        </ItemGrid>
      </Grid>
    )
  }
}
