import React, { Component } from 'react'
import {
  Card,
  CardHeader,
  Typography,
  CardContent,
  TextField,
} from '@material-ui/core'

export default class CalculatorScreen extends Component {
  render() {
    return (
      <Card>
        <CardHeader title="Delegate Stake (BPL)" />
        <CardContent>
          <TextField />
          <Typography variant="subtitle1">
            Stake includes BPL held by the delegate as well as BPL from all addresses voting for the delegate.    
          </Typography> 
        </CardContent>
      </Card>
    )
  }
}
