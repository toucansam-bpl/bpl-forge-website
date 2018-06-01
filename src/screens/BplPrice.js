import React, { Component } from 'react'

import { inject, observer } from 'mobx-react'
import { Button, Grid, Select, TextField } from '@material-ui/core'
import { ItemGrid, RegularCard } from 'components'

const EnteredPrice = inject('ui')(
  observer(({ ui }) => (
    <div>
      This price has been entered, it may not be the current actual price.
      <Button onClick={() => ui.resetPrice()}>Reload Current Price</Button>
    </div>
  ))
)

const CurrentPrice = inject('ui')(
  observer(({ ui }) => <div>As of {ui.priceLoadedDate}</div>)
)

@inject('ui')
@observer
class BplPrice extends Component {
  onCurrencyChange = evt => {
    this.props.ui.setCurrency(evt.target.value)
  }

  onPriceChange = evt => {
    this.props.ui.setEnteredPrice(evt.target.value)
  }

  render() {
    const { ui } = this.props
    const currencies = ['AUD', 'BTC', 'CNY', 'EUR', 'GBP', 'USD']

    return (
      <RegularCard
        raised
        headerColor="purple"
        cardTitle="BPL Price"
        content={
          <Grid>
            <ItemGrid xs={12} sm={7}>
              <TextField
                type="number"
                onChange={this.onPriceChange}
                value={ui.activePrice}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={5}>
              <Select
                native
                onChange={this.onCurrencyChange}
                value={ui.currency}
              >
                {currencies.map(currency => (
                  <option key={currency}>{currency}</option>
                ))}
              </Select>
            </ItemGrid>
          </Grid>
        }
        footer={ui.isUsingEnteredPrice ? <EnteredPrice /> : <CurrentPrice />}
      />
    )
  }
}

export default BplPrice
