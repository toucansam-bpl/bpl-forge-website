import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography, } from '@material-ui/core'


import { toFixed } from '../domain/util/format'


export class DelegateInfo extends Component {
  render() {
    const { delegateStore } = this.props

    return (
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div>
            <h5>
              {toFixed(delegateStore.activeDelegate.vote)} BPL
            </h5>
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Voter</TableCell>
                <TableCell numeric>BPL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {delegateStore.activeDelegate.voters.map(v => (
                <TableRow key={v.address}>
                  <TableCell>{v.username || v.address}</TableCell>
                  <TableCell numeric>{toFixed(v.balance)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    )
  }
}

export default inject('delegateStore')(observer(DelegateInfo))

/*
<h5>
{formatWithoutDigits(fromApiString(delegateStore.activeDelegate.vote))}{' '}
BPL ({toCurrencyFormat(
  sds.delegateCurrencyValue,
  sds.price.currency
)})
</h5>
*/
