import React, { Component } from 'react'

import { Grid, Select, TextField } from '@material-ui/core'
import { ItemGrid, RegularCard } from 'components'

export default class BplPrice extends Component {
  state = {
    currencies: ['AUD', 'BTC', 'CNY', 'EUR', 'GBP', 'USD'],
    price: '0.0000',
    selectedCurrency: 'USD',
  }

  onCurrencyChange(val) {
    this.setState(s => Object.assign({}, s, { selectedCurrency: val }))
  }

  onPriceChange(price) {
    this.setState(s => Object.assign({}, s, { price }))
  }

  render() {
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
                onChange={evt => this.onPriceChange(evt.target.value)}
                value={this.state.price}
              />
            </ItemGrid>
            <ItemGrid xs={12} sm={5}>
              <Select
                native
                onChange={evt => this.onCurrencyChange(evt.target.value)}
                value={this.state.selectedCurrency}
              >
                {this.state.currencies.map(currency => (
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
