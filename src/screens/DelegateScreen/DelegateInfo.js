import React, { Component } from 'react'

import { Grid } from '@material-ui/core'
import { RegularCard, Table, ItemGrid } from 'components'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import toCryptoFormat from '../../util/toCryptoFormat'
import fromApiString from '../../util/fromApiString'
import toCurrencyFormat from '../../util/toCurrencyFormat'

@inject('selectedDelegateStore')
@observer
export default class DelegateInfo extends Component {
  render() {
    const { selectedDelegateStore } = this.props
    const sds = selectedDelegateStore

    return (
      <Grid container>
        <ItemGrid xs={12} sm={6}>
          <div>
            <h2>Delegate Stake</h2>
            <h3>
              {toCryptoFormat(
                fromApiString(selectedDelegateStore.selectedDelegate.vote)
              )}{' '}
              BPL
            </h3>
          </div>
        </ItemGrid>

        <ItemGrid xs={12} sm={6}>
          <div>
            <h2>Estimated Reward</h2>
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
