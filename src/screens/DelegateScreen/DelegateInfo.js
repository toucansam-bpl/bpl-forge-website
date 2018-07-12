import React, { Component } from 'react'

import { Grid } from '@material-ui/core'
import { Table, ItemGrid } from 'components'
import { inject, observer } from 'mobx-react'

import toCryptoFormat, { formatWithoutDigits } from '../../util/toCryptoFormat'
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

            <Table
              tableHeaderColor="primary"
              tableHead={['Voter', 'BPL']}
              tableData={sds.voters.map(v => [
                v.username || v.address,
                formatWithoutDigits(fromApiString(v.balance)),
              ])}
            />
          </div>
        </ItemGrid>

        <ItemGrid xs={12} sm={6}>
          <div>
            <Table
              tableHeaderColor="primary"
              tableHead={['Time Period', 'BPL', 'Currency']}
              tableData={[
                [
                  'Per Block',
                  toCryptoFormat(sds.price.blockReward),
                  toCurrencyFormat(sds.price.currencyBlockReward),
                ],
                [
                  'Per Day',
                  toCryptoFormat(sds.price.bplDailyReward),
                  toCurrencyFormat(sds.price.currencyDailyReward),
                ],
                [
                  'Per Month',
                  toCryptoFormat(sds.price.bplMonthlyReward),
                  toCurrencyFormat(sds.price.currencyMonthlyReward),
                ],
                [
                  'Rest of Year',
                  toCryptoFormat(sds.price.bplRestOfYearReward),
                  toCurrencyFormat(sds.price.currencyRestOfYearReward),
                ],
              ]}
            />
          </div>
        </ItemGrid>
      </Grid>
    )
  }
}
