import React, { Component } from 'react'

import { Grid } from '@material-ui/core'
import { Table, ItemGrid } from 'components'
import { inject, observer } from 'mobx-react'

import { formatWithoutDigits } from '../../util/toCryptoFormat'
import fromApiString from '../../util/fromApiString'
import toCurrencyFormat from '../../util/toCurrencyFormat'

@inject('selectedDelegateStore')
@observer
export default class DelegateInfo extends Component {
  render() {
    const { selectedDelegateStore: sds } = this.props

    return (
      <Grid container>
        <ItemGrid xs={12} sm={6}>
          <div>
            <h5>
              {formatWithoutDigits(fromApiString(sds.selectedDelegate.vote))}{' '}
              BPL ({toCurrencyFormat(
                sds.delegateCurrencyValue,
                sds.price.currency
              )})
            </h5>
          </div>
        </ItemGrid>

        <ItemGrid xs={12} sm={6}>
          <Table
            columnFormat={{ 0: false, 1: true }}
            tableHeaderColor="primary"
            tableHead={['Voter', 'BPL']}
            tableData={sds.voters.map(v => [
              v.username || v.address,
              formatWithoutDigits(fromApiString(v.balance)),
            ])}
          />
        </ItemGrid>
      </Grid>
    )
  }
}
