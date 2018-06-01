import React, { Component } from 'react'

import { inject, observer } from 'mobx-react'
import { Grid, Select, TextField } from '@material-ui/core'
import { ItemGrid, RegularCard } from 'components'

@inject('ui')
@observer
class BplPrice extends Component {
  onCurrencyChange = evt => {
    this.props.ui.setCurrency(evt.target.value)
  }

  onPriceChange = evt => {
    this.props.ui.setPrice(evt.target.value)
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
                value={ui.bplPrice.toString()}
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
        statText="Stake includes BPL held by the delegate as well as BPL from all addresses voting for the delegate."
      />
    )
  }
}

export default BplPrice
/*

                <div className="card-footer text-muted">
                  <div id="price-loading">Loading...</div>
                  <div id="price-load-date" style={{ display: 'none'}}>
                    As of May 2, 2018 1:09 PM
                  </div>
                  <div id="user-entered-price" className="text-info" style={{display: 'none'}}>
                    This price has been entered, it may not be the current actual price.
                    <button type="button" id="reset-price" className="btn btn-primary">Reload Current Price</button>
                  </div>
                </div>
                */
