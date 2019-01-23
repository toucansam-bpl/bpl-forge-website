import React, { Component } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from '@material-ui/core'

export default class BplPrice extends Component {
  render() {
    return (
      <Card>
        <CardHeader title="BPL Price" />
        <CardContent>
          <FormControl>
            <InputLabel htmlFor="bpl-price">Price</InputLabel>
            <TextField
              inputProps={{
                name="bpl-price",
                id="bpl-price",
              }}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="bpl-currency">Currency</InputLabel>
            <Select
              native
              value={'USD'}
              // onChange={this.handleChange('age')}
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
              <option selected>USD</option>
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    )
  }
}
