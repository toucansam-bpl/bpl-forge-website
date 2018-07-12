import React, { Component } from 'react'

import { RegularCard, Table } from 'components'
import { inject, observer } from 'mobx-react'

import toCryptoFormat from '../../util/toCryptoFormat'
import toCurrencyFormat from '../../util/toCurrencyFormat'

@inject('selectedDelegateStore')
@observer
export default class EstimatedReward extends Component {
  render() {
    const { selectedDelegateStore: sds } = this.props

    return sds.hasSelectedDelegate ? (
      <RegularCard
        raised
        headerColor="purple"
        cardTitle="Estimated Reward"
        content={
          <Table
            columnFormat={{ [0]: false, [1]: true, [2]: true }}
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
        }
      />
    ) : (
      <div>No delegate</div>
    )
  }
}
