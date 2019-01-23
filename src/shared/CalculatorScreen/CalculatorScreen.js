import React, { Component } from 'react'
import {
  Grid,
} from '@material-ui/core'

import BplPrice from './BplPrice'
import DelegateStake from './DelegateStake'

export default class CalculatorScreen extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={3}>
          <DelegateStake />
          <BplPrice />
        </Grid>
      </Grid>
    )
  }
}

/*
      <div class="row">
      
      <div class="col-md-3">

      <div class="card card-nav-tabs">
        <div class="card-header card-header-rose">
          BPL Price
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-9">
              <input type="number" id="bpl-price" class="form-control" />
            </div>

            <div class="col-md-3">
              <select id="selected-currency" style="-moz-appearance: menulist; -webkit-appearance: menulist;">

              </select>
            </div>
          </div>
        </div>


        <div class="card-footer text-muted">
          <div id="price-loading">Loading...</div>
          <div id="price-load-date" style="display: none;">
            As of May 2, 2018 1:09 PM
          </div>
          <div id="user-entered-price" class="text-info" style="display: none;">
            This price has been entered, it may not be the current actual price.
            <button type="button" id="reset-price" class="btn btn-primary">Reload Current Price</button>
          </div>
        </div>
      </div>


    </div>


    <div class="col-md-9">

<div class="card">
<div class="card-header">
  <ul id="reward-time-period" class="nav nav-pills nav-pills-rose card-header-pills">
    <li class="nav-item">
      <a class="nav-link" id="reward-per-day" data-time-period="day" href="#">Per Day</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="reward-per-week" data-time-period="week" href="#">Per Week</a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" id="reward-per-month" data-time-period="month" href="#">Per Month</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="reward-rest-of-year" data-time-period="restOfYear" href="#">Rest of Year</a>
    </li>
  </ul>
</div>

<div class="card-body">
  <div class="row">
    <div class="col">
      <h2>Market Cap</h2>
      <h3><span id="market-cap"></span></h3>
      
      <div style="margin-top: 25px; position: relative;">
        <h2>Block Reward
          <i class="material-icons" data-toggle="modal" data-target="#block-reward-details">help</i>
        </h2>
      </div>
      <h3><span id="block-reward"></span> BPL</h3>

      <div class="form-check">
        <label class="form-check-label">
          Include fixed reward
          <input id="include-fixed-reward" class="form-check-input" type="checkbox" value="">
          <span class="form-check-sign">
            <span class="check"></span>
          </span>
        </label>
      </div>              
    </div>
    <div class="col">
      <h2>Estimated Reward</h2>
      <h1><span id="currency-value"></span></h1>
      <h2><span id="bpl-value"></span> BPL</h2>
    </div>
  </div>

</div>
</div>

</div>
</div>

</div>
</div>


<div id="block-reward-details" class="modal" tabindex="-1" role="dialog">
<div class="modal-dialog" role="document">
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title">Block Reward Details</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <table>
      <tbody>
        <tr>
          <td class="reward-category">Interest (5% of stake annually)</td>
          <td id="interest-value" class="bpl-amount"></td>
        </tr>
        <tr>
          <td class="reward-category" >Fees (Average over the past 2 days)</td>
          <td id="fees-value" class="bpl-amount"></td>
        </tr>
        <tr>
          <td class="reward-category">Fixed reward (Current plan, but not final)</td>
          <td id="fixed-reward-value" class="bpl-amount"></td>
        </tr>
        <tr id="total-row">
          <td class="reward-category">Total</td>
          <td id="total-value" class="bpl-amount"></td>
        </tr>
      </tbody>
    </table>
  </div>
*/
