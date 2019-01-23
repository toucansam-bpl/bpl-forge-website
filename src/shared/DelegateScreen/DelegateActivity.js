import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Grid,
         Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow,
         Typography,
      } from '@material-ui/core'


import { toFixed } from '../domain/util/format'


export class DelegateActivity extends Component {
  render() {
    const { delegateStore } = this.props

    return (
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Height</TableCell>
                <TableCell>Time</TableCell>
                <TableCell numeric>Reward</TableCell>
                <TableCell numeric>Fees</TableCell>
                <TableCell numeric>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {delegateStore.activeDelegate.rewardBlockPagination.items.map(b => (
                <TableRow key={b.id}>
                  <TableCell>{b.height}</TableCell>
                  <TableCell>{b.timestamp}</TableCell>
                  <TableCell numeric>{toFixed(b.reward, 8)}</TableCell>
                  <TableCell numeric>{toFixed(b.totalFee, 8)}</TableCell>
                  <TableCell numeric>{toFixed(b.totalForged, 8)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={5}
                  count={delegateStore.activeDelegate.rewardBlockPagination.totalCount}
                  rowsPerPage={delegateStore.activeDelegate.rewardBlockPagination.pageSize}
                  page={delegateStore.activeDelegate.rewardBlockPagination.pageNumber}
                  onChangePage={evt => console.log(evt)}
                  onChangeRowsPerPage={evt => console.log(evt)}
                  // ActionsComponent={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Grid>
      </Grid>
    )
  }
}

export default inject('delegateStore')(observer(DelegateActivity))

/*
<h5>
{formatWithoutDigits(fromApiString(delegateStore.activeDelegate.vote))}{' '}
BPL ({toCurrencyFormat(
  sds.delegateCurrencyValue,
  sds.price.currency
)})
</h5>
*/
