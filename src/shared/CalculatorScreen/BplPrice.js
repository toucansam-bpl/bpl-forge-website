import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from '@material-ui/core'


export class BplPrice extends Component {
  handleCurrencyChange = (evt) => {
    this.props.priceStore.setCurrency(evt.target.value)
  }

  render() {
    const { priceStore } = this.props

    return (
      <Card>
        <CardHeader title="BPL Price" />
        <CardContent>
          <FormControl>
            <InputLabel htmlFor="bpl-price">Price</InputLabel>
            <TextField
              value={priceStore.price}
              inputProps={{
                name: 'bpl-price',
                id: 'bpl-price',
              }}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="bpl-currency">Currency</InputLabel>
            <Select
              native
              defaultValue={'USD'}
              onChange={this.handleCurrencyChange}
              inputProps={{
                name: 'bpl-currency',
                id: 'bpl-currency',
              }}
            >
              <option>AUD</option>
              <option>BTC</option>
              <option>CNY</option>
              <option>EUR</option>
              <option>GBP</option>
              <option>USD</option>
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    )
  }
}

export default inject('priceStore')(observer(BplPrice))
