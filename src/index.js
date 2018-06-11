import React from 'react'
import ReactDOM from 'react-dom'

import { createBrowserHistory } from 'history'
import { Provider } from 'mobx-react'
import { Router, Route, Switch } from 'react-router-dom'

import App from './App'
import 'assets/css/material-dashboard-react.css?v=1.2.0'
import BitApi from './domain/api/BitApi'
import DelegateStore from './stores/DelegateStore'
import './index.css'
import NodeApi from './domain/api/NodeApi'
import PriceApi from './domain/api/PriceApi'
import FeeReward from './domain/rewards/rewardParts/FeeReward'
import registerServiceWorker from './registerServiceWorker'
import SelectedDelegateStore from './stores/SelectedDelegateStore'
import UiStore from './stores/UiStore'

const hist = createBrowserHistory()
const nodeApi = new NodeApi()
const feeReward = new FeeReward(nodeApi)
const delegateStore = new DelegateStore(nodeApi)
const priceApi = new PriceApi()
const stores = {
  delegateStore,
  selectedDelegateStore: new SelectedDelegateStore(
    feeReward,
    delegateStore,
    nodeApi,
    priceApi
  ),
  ui: new UiStore(new BitApi(), nodeApi, priceApi),
}

ReactDOM.render(
  <Provider {...stores}>
    <Router history={hist}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
